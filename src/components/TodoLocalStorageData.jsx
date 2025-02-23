const saveData = "TODO-DATA";
export const getLocalStorageData = () => {
  const savedData = localStorage.getItem(saveData);
  if (!savedData) return [];
  try {
    return JSON.parse(savedData);
  } catch (error) {
    console.error("Error parsing saved data:", error);
    return [];
  }
};

export const setLocalStorageData = (task) => {
  return localStorage.setItem(saveData, JSON.stringify(task));
};
