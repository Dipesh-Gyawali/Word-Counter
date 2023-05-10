import {Routes, Route} from "react-router-dom";
import {AddTask,Jokes} from "../components";
import { PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<AddTask/>} />
            <Route path="/jokes" element={<Jokes/>} />
            <Route path="*" element={<PageNotFound/>} />
        </Routes>
    </div>
  )
}
