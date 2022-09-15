import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from "firebase/storage";
import { storage } from "./FirebaseConfig";

const useFirebase = {
  uploadSingleImage: async (file, url) => {
    try {
      if (!file) return;
      var today = new Date();
      const name =
        file.name +
        today.getDay() +
        ":" +
        today.getHours() +
        ":" +
        today.getMinutes() +
        ":" +
        today.getSeconds() +
        ":" +
        today.getMilliseconds();

      const storageRef = ref(storage, `images/${url}/${name}`);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {},
        (error) => console.log(error)
      );
      await uploadTask;
      let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
      let imageData = { name: name, url: downloadURL };
      return imageData;
    } catch (error) {
      alert("Có lỗi khi thêm ảnh");
      return false;
    }
  },
  uploadMultiFile: async (files, url) => {
    try {
      if (!files) return;
      const listFiles = [];
      for (const file of files) {
        var today = new Date();

        const name =
          file.name +
          today.getDay() +
          ":" +
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds() +
          ":" +
          today.getMilliseconds();
        const storageRef = ref(storage, `images/${url}/${name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);
        uploadTask.on(
          "state_changed",
          (snapshot) => {},
          (error) => console.log(error)
        );
        await uploadTask;
        let downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
        let imageData = { name: name, url: downloadURL };
        listFiles.push(imageData);
      }

      return listFiles;
    } catch (error) {
      alert("Có lỗi khi thêm ảnh");
      return false;
    }
  },
};

export default useFirebase;
