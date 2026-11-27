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
import { Calendar } from "primereact/calendar";


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

const RicelivestatusCreateDialogComponent = (props) => {
    const [_entity, set_entity] = useState({});
    const [error, setError] = useState({});
    const [loading, setLoading] = useState(false);
    const urlParams = useParams();
    

    useEffect(() => {
        let init  = {boxStatus: false,refillRequired: false};
        if (!_.isEmpty(props?.entity)) {
            init = initilization({ ...props?.entity, ...init }, [], setError);
        }
        set_entity({...init});
        setError({});
    }, [props.show]);

    const validate = () => {
        let ret = true;
        const error = {};
        
        if (!ret) setError(error);
        return ret;
    }

    const onSave = async () => {
        if(!validate()) return;
        let _data = {
            boxId: _entity?.boxId,boxStatus: _entity?.boxStatus || false,estimatedPlates: _entity?.estimatedPlates,refillThreshold: _entity?.refillThreshold,refillRequired: _entity?.refillRequired || false,updatedAt: _entity?.updatedAt,
            createdBy: props.user._id,
            updatedBy: props.user._id
        };

        setLoading(true);

        try {
            
        const result = await client.service("ricelivestatus").create(_data);
        props.onHide();
        props.alert({ type: "success", title: "Create info", message: "Info Rice Live Status created successfully" });
        props.onCreateResult(result);
        } catch (error) {
            console.debug("error", error);
            setError(getSchemaValidationErrorsStrings(error) || "Failed to create");
            props.alert({ type: "error", title: "Create", message: "Failed to create in Rice Live Status" });
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
        <Dialog header="Create Rice Live Status" visible={props.show} closable={false} onHide={props.onHide} modal style={{ width: "50vw", fontFamily: "Inter, sans-serif", fontSize: "14px", "--cb-font": "Inter, sans-serif", "--cb-size": "14px" }} className="min-w-max scalein animation-ease-in-out animation-duration-1000 cb-appearance" footer={renderFooter()} resizable={false}>
            <div className="grid p-fluid overflow-y-auto"
            style={{ maxWidth: "55vw" }} role="ricelivestatus-create-dialog-component">
            <div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="boxId">box_id:</label>
                <InputText id="boxId" className="w-full mb-3 p-inputtext-sm" value={_entity?.boxId} onChange={(e) => setValByKey("boxId", e.target.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["boxId"]) ? (
              <p className="m-0" key="error-boxId">
                {error["boxId"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="boxStatus">box_status:</label>
                <Checkbox id="boxStatus" className="ml-3" checked={_entity?.boxStatus} onChange={(e) => setValByKey("boxStatus", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["boxStatus"]) ? (
              <p className="m-0" key="error-boxStatus">
                {error["boxStatus"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="estimatedPlates">estimated_plates:</label>
                <InputNumber tooltip="Use only numbers" id="estimatedPlates" className="w-full mb-3 p-inputtext-sm" value={_entity?.estimatedPlates} onChange={(e) => setValByKey("estimatedPlates", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["estimatedPlates"]) ? (
              <p className="m-0" key="error-estimatedPlates">
                {error["estimatedPlates"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="refillThreshold">refill_threshold:</label>
                <InputNumber tooltip="Use only numbers" id="refillThreshold" className="w-full mb-3 p-inputtext-sm" value={_entity?.refillThreshold} onChange={(e) => setValByKey("refillThreshold", e.value)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["refillThreshold"]) ? (
              <p className="m-0" key="error-refillThreshold">
                {error["refillThreshold"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field flex">
            <span className="align-items-center">
                <label htmlFor="refillRequired">refill_required:</label>
                <Checkbox id="refillRequired" className="ml-3" checked={_entity?.refillRequired} onChange={(e) => setValByKey("refillRequired", e.checked)}  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["refillRequired"]) ? (
              <p className="m-0" key="error-refillRequired">
                {error["refillRequired"]}
              </p>
            ) : null}
          </small>
            </div>
<div className="col-12 md:col-6 field">
            <span className="align-items-center">
                <label htmlFor="updatedAt">updated_at:</label>
                <Calendar id="updatedAt"  value={_entity?.updatedAt ? new Date(_entity?.updatedAt) : null} dateFormat="dd/mm/yy" onChange={ (e) => setValByKey("updatedAt", new Date(e.value))} showIcon showButtonBar  />
            </span>
            <small className="p-error">
            {!_.isEmpty(error["updatedAt"]) ? (
              <p className="m-0" key="error-updatedAt">
                {error["updatedAt"]}
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

export default connect(mapState, mapDispatch)(RicelivestatusCreateDialogComponent);
