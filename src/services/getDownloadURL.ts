import { storage } from './firebaseConfig'
import { ref, getDownloadURL, listAll } from 'firebase/storage'


export const getDownloadImageURL = async (fileName: string) => {
    try {
        const storageRef = ref(storage, `gs://resolveja-84e1c.firebasestorage.app/${fileName}`)
        const downloadURL = await getDownloadURL(storageRef)
        return downloadURL
    } catch (error) {
        console.log(error)
    }
}

export const listFilesIcons = async () => {
    try {
        const storageRef = ref(storage, 'gs://resolveja-84e1c.firebasestorage.app/icons')
        const listResult = await listAll(storageRef)

        listResult.items.forEach((itemRef) => {
            console.log(itemRef.fullPath)
        })
    } catch (error) {
        console.log(error)
    }
}