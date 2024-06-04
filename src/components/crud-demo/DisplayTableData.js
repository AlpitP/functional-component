const DisplayTableData = ({ data, editRecord, deleteRecord }) => {
  return data.map((record, index) => {
    return (
      <tr key={record.id}>
        <td>{index + 1}</td>
        <td>{record.name}</td>
        <td>{record.email}</td>
        <td>{record.gender}</td>
        <td>
          {record.hobby.map((hobby) => {
            return hobby + " ";
          })}
        </td>
        <td>{record.state}</td>
        <td>{record.city}</td>
        <td>
          <button id={record.id} onClick={() => editRecord(record.id)}>
            Edit
          </button>
        </td>
        <td>
          <button id={record.id} onClick={() => deleteRecord(record.id, index)}>
            Delete
          </button>
        </td>
      </tr>
    );
  });
};
export default DisplayTableData;
