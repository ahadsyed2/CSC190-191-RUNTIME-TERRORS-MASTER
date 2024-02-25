import { VehicleContext } from "../context/VehicleContext";
import { useContext } from "react";

export const useVehicleContext = () => {

    const context = useContext(VehicleContext);


    if(!context) {
     throw Error('useVehicleContext must be used inside a VehicleContextProvider')
    }
 
    return context

}