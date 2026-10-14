const sendEmail = async (email) => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve();
    }, 5000); // deley of 5 seconds to simulate email sending
  });

  console.log('Task completed :- Email sent successfully');
};

export default sendEmail;
