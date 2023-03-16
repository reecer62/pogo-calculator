import Image from "next/image";

export const IVs = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="table w-full">
        {/* head */}
        <thead>
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Created</th>
            <th>Modified</th>
            <th>
              <Image
                src="/icons8-plus.svg"
                alt="Picture of plus icon"
                width={24}
                height={24}
              />
            </th>
            <th className="justify-center">
              <Image
                src="/icons8-trash.svg"
                alt="Picture of trash icon"
                width={24}
                height={24}
              />
            </th>
          </tr>
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
              <div className="flex items-center space-x-3">List #1</div>
            </td>
            <td>2:54pm</td>
            <td>12:30pm</td>
            <th>
              <button className="btn-ghost btn-xs btn">details</button>
            </th>
            <th>
              <Image
                src="/noun-down.svg"
                alt="Picture of expand icon"
                width={24}
                height={24}
              />
            </th>
          </tr>
          {/* row 2 */}
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <td>
              <div className="flex items-center space-x-3">List #2</div>
            </td>
            <td>1:05pm</td>
            <td>1:01pm</td>
            <th>
              <button className="btn-ghost btn-xs btn">details</button>
            </th>
            <th>
              <Image
                src="/noun-up.svg"
                alt="Picture of collapse icon"
                width={24}
                height={24}
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
