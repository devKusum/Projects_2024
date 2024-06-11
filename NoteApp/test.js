const addBtn = document.querySelector("#addBtn");
const main = document.querySelector("#main");

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];
    notes.forEach(
        (note) =>{
            data.push(note.value)
        }
    )

    // console.log(data);



    localStorage.setItem("notes", JSON.stringify(data))
}




addBtn.addEventListener(
    "click",
    function(){
       addNote ()
    }
)

const addNote = () =>{
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
     <div class="tool">
               
                <span class=" save  bi bi-save"></span>
                <span class="  trash  bi bi-trash"></span>
    </div>
    <textarea ></textarea>
    `;
    note.querySelector(".trash").addEventListener(
        "click",
        function () {
        note.remove();
        saveNotes();
        }
    )
    note.querySelector(".save").addEventListener(
        "click",
        function () {
        saveNotes();
        }
    )







  main.appendChild(note);
  saveNotes();
}