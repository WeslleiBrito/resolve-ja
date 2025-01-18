import { storage } from './firebaseConfig'
import { ref, getDownloadURL, listAll } from 'firebase/storage'


export const getDownloadImageURL = async (fileNames: Array<{}>) => {
    try {
        const listUrl = []

        for (let i = 0; i < listUrl.length; i++){
            const storageRef = ref(storage, `gs://resolveja-84e1c.firebasestorage.app/${fileNames}`)
            const downloadURL = await getDownloadURL(storageRef)
            listUrl.push(downloadURL)
        }
       
        return listUrl
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