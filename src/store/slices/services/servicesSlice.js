import { createSlice } from '@reduxjs/toolkit'
import { serviceData } from '../../../utils/servicesData'
const servicesSlice = createSlice({
  name: 'services',
  initialState: {
    
currentService:serviceData[0],
  },
  reducers: {
    selectSerivce: (state, action) => {
      const selectedService = serviceData.find(service => service.id === action.payload);
      if (selectedService) {
          state.currentService = selectedService; // Set the entire object
      }
  },
    
  },
})
export const { selectSerivce } = servicesSlice.actions
export default servicesSlice.reducer