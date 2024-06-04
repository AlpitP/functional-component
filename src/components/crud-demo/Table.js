import { memo, useState } from "react";
import "../crud-demo/tableStyle.css";
import DisplayTableData from "./DisplayTableData";

const ascendingSort = "Ascending";
const descendingSort = "Descending";

function Table({ data, handlerSubmit, EditRecord, clearForm }) {
  const [editBtnId, setEditBtnId] = useState();
  const [search, setSearch] = useState("");
  const [searchData, setSearchData] = useState([...data]);

  function deleteRecord(id, index) {
    if (id === editBtnId) {
      clearForm();
    }
    data.splice(index, 1);
    handlerSubmit([...data]);
  }

  function editRecord(id) {
    setEditBtnId(id);
    EditRecord(data.findIndex((record) => record.id === id));
  }
  function searchHandler(e) {
    setSearch(e.target.value);
    const newData = data.filter((record) =>
      record.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setSearchData(newData);
  }
  function sortHandler(e) {
    if (e.target.value === ascendingSort) {
      const ascendingSortData = data.sort((a, b) => (a.name > b.name ? 1 : -1));
      handlerSubmit([...ascendingSortData]);
    } else if (e.target.value === descendingSort) {
      const descendingSortData = data.sort((b, a) =>
        a.name > b.name ? 1 : -1
      );
      handlerSubmit([...descendingSortData]);
    }
  }
  return (
    <>
      <input
        type="search"
        name="search"
        placeholder="Search"
        style={{ marginLeft: "42%", marginTop: 10 }}
        onChange={searchHandler}
      />
      <select name="sort" onChange={sortHandler}>
        <option value="Ascending">Ascending</option>
        <option value="Descending">Descending</option>
      </select>
      <h1 style={{ textAlign: "center" }}>User Records</h1>
      <table>
        <thead>
          <tr>
            <th>Index</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Hobby</th>
            <th>State</th>
            <th>City</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <DisplayTableData
            data={search ? searchData : data}
            editRecord={editRecord}
            deleteRecord={deleteRecord}
          />
        </tbody>
      </table>
      {(!searchData.length || !data.length) && (
        <h1 style={{ textAlign: "center" }}>No Record Found</h1>
      )}
    </>
  );
}

export default memo(Table);
