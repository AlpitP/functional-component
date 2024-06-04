const state = {
  state: [
    {
      state: "Gujarat",
      cities: ["select", "Surat", "Ahmedabad", "Rajkot", "Bharuch"],
    },
    {
      state: "Maharashtra",
      cities: ["select", "Mumbai", "Nagpur", "Pune", "Nasik"],
    },
    {
      state: "Rajasthan",
      cities: ["select", "Udaipur", "Jaipur", "Bikaner"],
    },
  ],
};
export const formFieldData = [
  {
    type: "text",
    label: "Name",
    name: "name",
    error: "*Name is Required",
  },
  {
    type: "email",
    label: "Email",
    name: "email",
    error: "*Email is Required",
  },
  {
    type: "radio",
    label: "Gender",
    name: "gender",
    data: ["Male", "Female"],
    error: "*Please Select Your Gender",
  },
  {
    type: "checkbox",
    label: "Hobby",
    id: "hobby",
    name: ["reading", "playing", "sport"],
    data: ["Reading", "Playing", "Sport"],
    error: "*Please Select Your Hobbies",
  },
  {
    type: "select",
    label: "State",
    name: "state",
    data: ["select", "Gujarat", "Maharashtra", "Rajasthan"],
    error: "*Please Select Your State",
  },
  {
    type: "select",
    label: "City",
    name: "city",
    data:
      state === "Gujarat"
        ? ["select", "Surat", "Ahmedabad", "Rajkot", "Bharuch"]
        : state === "Maharashtra"
        ? ["select", "Mumbai", "Nagpur", "Pune", "Nasik"]
        : state === "Rajasthan"
        ? ["select", "Udaipur", "Jaipur", "Bikaner"]
        : ["select"],
    // data: ["select"],
    error: "*Please Select Your City",
  },
];
