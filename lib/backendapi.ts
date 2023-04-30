const sendEmail = async (data:fromdata) => {
  await fetch("api/contactme", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
};

export default sendEmail;
