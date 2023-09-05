import React from "react";

export const Projects = () =>
{
    return(
        <div className="mt-20">
            <div className="text-6xl heading p-2 my-16 hover-effect1">Projects</div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.vetbossel.in/wp-content/uploads/2020/09/gst-billing-app-android-studio.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Inventory Billing App</div>
            </div>
          </div>
        </td>
        <td>
        <a
          href="https://endearing-horse-15c68d.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Billing App
        </a>
        </td>
      </tr>
      {/* row 2 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://global-uploads.webflow.com/5ebea55066f36f531dec5b32/628553b6a7a763b0ed126a9c_I41SrzFSarnJwGgxSXv0dIWn4AwVa80Ly_B8-afRWUE3eyezBFQggd8Yq5dLWyqQjThPM2N5Ajwc6KlEOwKo01GI887rWDyahPHiIbMCi6bwkRjqd1NLs8VFnWXC1RLAQ7xXPZ1mo2VBzHCwCw.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Student-Teacher-Formik</div>
            </div>
          </div>
        </td>
        <td>
        <a
          href="https://frolicking-gumdrop-ca2ead.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Formik App
        </a>
        </td>
      </tr>
    {/* row 3 */}
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="https://www.wodumedia.com/wp-content/uploads/sites/2/sites/1000016/2018/08/Dashboard-dashboard.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">A Simple Dashboard</div>
            </div>
          </div>
        </td>
        <td>
        <a
          href="https://tangerine-jelly-2bc108.netlify.app"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          Dashboard App
        </a>
        </td>
      </tr>
      
    </tbody>
    
  </table>
</div>
        </div>
    )
}