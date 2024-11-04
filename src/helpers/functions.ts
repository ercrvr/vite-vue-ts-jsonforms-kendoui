export const calculateAge = (birthday: string): number => {
  const birthDate = new Date(birthday)
  const currentDate = new Date()
  let age = currentDate.getFullYear() - birthDate.getFullYear()
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--
  }
  if (age < 0) {
    age = 0
  }
  return age
}
