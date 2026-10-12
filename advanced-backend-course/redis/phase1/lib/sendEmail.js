const sendEmail = async (email) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000);
  });

  console.log('Task completed :- Email sent successfully');
};

export default sendEmail;
