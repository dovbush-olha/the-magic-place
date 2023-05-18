const transformProfessorData = (professorFromResponce) => ({
  id: professorFromResponce._id,
  EN: { ...professorFromResponce.EN },
  UK: { ...professorFromResponce.UK },
  createdAt: professorFromResponce.createdAt,
  updatedAt: professorFromResponce.updatedAt,
});

module.exports = transformProfessorData;
