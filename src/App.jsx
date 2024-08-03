import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import { EmpCreate, EmpDetail, EmpEdit, EmpListing, Root } from "./components";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />} >
      <Route path="" element={<EmpListing />} />
      <Route path="employee/create" element={<EmpCreate />} />
      <Route path="employee/detail/:id" element={<EmpDetail />} />
      <Route path="employee/edit/:id" element={<EmpEdit />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />;
}
export default App;