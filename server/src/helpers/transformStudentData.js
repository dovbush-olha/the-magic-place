const transfromStudentData = (studentFromResponce) => ({
  id: studentFromResponce._id,
  EN: { ...studentFromResponce.EN },
  UK: { ...studentFromResponce.UK },
  createdAt: studentFromResponce.createdAt,
  updatedAt: studentFromResponce.updatedAt,
});

module.exports = transfromStudentData;