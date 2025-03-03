function convertToBase64(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result as string;
      if (result) {
        resolve(result.split(",")[1]); // Отримуємо тільки base64 без `data:image/...;base64,`
      } else {
        reject(new Error("Failed to read file"));
      }
    };

    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(file); // Читаємо файл як data URL
  });
}

export default convertToBase64;