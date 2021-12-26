import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import { DataViews } from '../../models/staticModels';
import { AppStateContext } from '../../context/deviceContext';
import { Actions } from '../../actions/deviceActions';

export default function ViewController() {
  const { state: { currentView }, dispatch } = React.useContext(AppStateContext);

  const handleViewChange = (view: string) => {
    dispatch(Actions.updateView(view));
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Select view</FormLabel>
      <RadioGroup 
      row 
      aria-label="data-views" 
      name="row-radio-buttons-group"
      value={currentView}
      onChange={e => handleViewChange(e.target.value)}>
        <FormControlLabel value={DataViews.TABLE} control={<Radio />} label="Table" />
        <FormControlLabel value={DataViews.CARD} control={<Radio />} label="Card" />
      </RadioGroup>
    </FormControl>
  );
}