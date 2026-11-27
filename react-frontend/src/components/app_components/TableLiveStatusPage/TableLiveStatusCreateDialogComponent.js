import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import client from "../../../services/restClient";
import _ from "lodash";
import initilization from "../../../utils/init";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import { Checkbox } from "primereact/checkbox";
import { InputNumber } from "primereact/inputnumber";


const getSchemaValidationErrorsStrings = (errorObj) => {
    let errMsg = {};
    for (const key in errorObj.errors) {
      if (Object.hasOwnProperty.call(errorObj.errors, key)) {
        const element = errorObj.errors[key];
        if (element?.message) {
          errMsg[key] = element.message;
        }
      }
    }
    return errMsg.length ? errMsg : errorObj.message ? { error : errorObj.message} : {};
};

const TableLiveStatusCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {tableOccupied: false,cleaningRequired: false,attendanceRequired: false};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
          
            if (_.isEmpty(_entity?.tableCode)) {
                error["tableCode"] = `Table Code field is required`;
                ret = false;
            }
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            tableCode: _entity?.tableCode,tableOccupied: _entity?.tableOccupied || false,customerCount: _entity?.customerCount,cleaningRequired: _entity?.cleaningRequired || false,attendanceRequired: _entity?.attendanceRequired || false,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("tableLiveStatus").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Table Live Status created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Table Live Status" });
        }
        setLoading(false);
    };

    

    

    

    
    
    

    const renderFooter = () => (
        <div className="flex justify-content-end">
            <Button label="save" className="p-button-text no-focus-effect" onClick={onSave} loading={loading} />
            <Button label="close" className="p-button-text no-focus-effect p-button-secondary" onClick={props.onHide} />
        </div>
    );

    const setValByKey = (key, val) => {
        let new_entity = { ..._entity, [key]: val };
        set_entity(new_entity);
        setError({});
    };

    

    return (
        <Dialog header="Create Table Live Status" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "50vw", fontFamily: "Inter, sans-serif", fontSize: "14px", "--cb-font": "Inter, sans-serif", "--cb-size": "14px" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000 cb-appearance" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="tableLiveStatus-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="tableCode">Table Code:</label>
                <InputText id="tableCode" className="w-full mb-3 p-inputtext-sm" value={_entity?.tableCode} onChange={(e) => setValByKey("tableCode", e.target.value)}  required  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tableCode"]) ? (
              <p className="m-0" key="error-tableCode">
                {error["tableCode"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="tableOccupied">Table Occupied:</label>
                <Checkbox id="tableOccupied" className="ml-3" checked={_entity?.tableOccupied} onChange={(e) => setValByKey("tableOccupied", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["tableOccupied"]) ? (
              <p className="m-0" key="error-tableOccupied">
                {error["tableOccupied"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="customerCount">Customer Count:</label>
                <InputNumber tooltip="Use only numbers" id="customerCount" className="w-full mb-3 p-inputtext-sm" value={_entity?.customerCount} onChange={(e) => setValByKey("customerCount", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["customerCount"]) ? (
              <p className="m-0" key="error-customerCount">
                {error["customerCount"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="cleaningRequired">Cleaning Required:</label>
                <Checkbox id="cleaningRequired" className="ml-3" checked={_entity?.cleaningRequired} onChange={(e) => setValByKey("cleaningRequired", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["cleaningRequired"]) ? (
              <p className="m-0" key="error-cleaningRequired">
                {error["cleaningRequired"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="attendanceRequired">Attendance Required:</label>
                <Checkbox id="attendanceRequired" className="ml-3" checked={_entity?.attendanceRequired} onChange={(e) => setValByKey("attendanceRequired", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["attendanceRequired"]) ? (
              <p className="m-0" key="error-attendanceRequired">
                {error["attendanceRequired"]}
              </p>
            ) : null}
          </small>
            </div>
            <small className="p-error">
                {Array.isArray(Object.keys(error))
                ? Object.keys(error).map((e, i) => (
                    <p className="m-0" key={i}>
                        {e}: {error[e]}
                    </p>
                    ))
                : error}
            </small>
            </div>
        </Dialog>
    );
};

const mapState = (state) => {
    const { user } = state.auth;
    return { user };
};
const mapDispatch = (dispatch) => ({
    alert: (data) => dispatch.toast.alert(data),
});

export default connect(mapState, mapDispatch)(TableLiveStatusCreateDialogComponent);
