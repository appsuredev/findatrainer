import React from 'react';
import ClientMeasurementEditor from '../components/ClientMeasurementEditor.js';

const EditClientMeasurement = ({ doc }) => (
  <div className="clientMeasurementEditor">
    <h1 className="page-header">Welcome to Findatrainer…</h1>
    <ClientMeasurementEditor doc={ doc }  />
  </div>
);

EditClientMeasurement.propTypes = {
  doc: React.PropTypes.object,
};

export default EditClientMeasurement;
