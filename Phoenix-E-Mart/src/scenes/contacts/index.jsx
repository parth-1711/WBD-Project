import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../pages/theme";
// import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material";
import { useState, useEffect } from "react";

const Contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    // { field: "id", headerName: "ID", flex: 0.5 },
    { field: "_id", headerName: "User ID", flex: 1 },
    {
      field: "uname",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "contactNumber",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "email",
      headerName: "Email",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
  ];

  const [isFetching, setIsFetching] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsFetching(true);
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/getAllUsers");

        if (!response.ok) {
          throw new Error("Some error occured while fetching list of users!");
        }
        const data = await response.json();
        if (data.length === 0) {
          console.log("No users found.");
        }

        data.users.map((ele) => {
          let temp = ele;

          if (!ele.contactNumber) {
            temp.contactNumber = "Contact number not added yet.";
          }

          if (!ele.adress) {
            temp.address = ele.address[0];
          } else if (ele.adress.length == 0)
            temp.address = "Address not added yet";
          else temp.address = ele.adress[0];
          // console.log(temp);
          return temp;
        });

        console.log(data.users);
        // console.log(data.users);
        setUsers(data.users);
        setIsFetching(false);
      } catch (error) {
        setError(error.message);
        // console.log(error.message);
      }
    };
    setIsFetching(false);
    fetchUsers();
  }, []);

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of Contacts for Future Reference"
      />
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
            color: `${colors.grey[100]} !important`,
          },
        }}
      >
        {isFetching && <p>Fetching users list...</p>}
        <DataGrid
          getRowId={(row) => row._id}
          rows={users}
          columns={columns}
          components={{ Toolbar: GridToolbar }}
        />
        {error && <p>{error}</p>}
      </Box>
    </Box>
  );
};

export default Contacts;
