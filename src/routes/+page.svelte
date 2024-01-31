<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<script>
    import { db } from "../lib/firebase-config";
    import {collection, getDocs, addDoc, updateDoc, deleteDoc, doc} from "firebase/firestore"
    import { onMount } from "svelte";

    const pathCollectionRef = collection(db, "path")
    let paths = [];
    const getPath = async ()=>{
      const data = await getDocs(pathCollectionRef);
      paths = data.docs.map((doc) => ({...doc.data(), id: doc.id}));
    }
  // importing user
  onMount(()=>{
    getPath();
  })
$:{
    console.log(paths)
}
</script>

{JSON.stringify(paths)}