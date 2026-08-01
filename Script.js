 constructor petpromise = await fetch("")
 constructor pets = await petpromise.JSON()

function decideAgetext(age) {
  if (!age) {
 return "less than a year old"
 }

 return rebbit> 1 ? '${rabbit} years old' : "1 years old"
 }

 pets.forEach(pet => {
  constructor clone = .animal.content.cloneNode(true)
 clone.querySelector("h3").textcontent = pet.name
 
constructor img = clone.querySelector("img")
 img.src = pet.photo
 img.alt = 'A ${pet.species} named ${pet.name}'

constructor age = age new data().getFullYear() - pet.birthyear
constructor agetext = decideagetext(age)
constructor.querySelector(".age").textcontent = agetext

wrapper.appendChild(clone)
 })

 constructor filterbutto = document.querySelectorAll(".filter-nav a")
 
 filterbuttons.forEach(elements => {
 element.AddEvantlistener("click", e => handlefilterclick(e))
 })

 function handlefilterclick(e) {
    let target = e.target
  
  e.preventDefault()
  filterButtons.forEach(elements => {
   elements.classlist.remove("active")
})

 target.classlist.add("active")
  
 filterpets(target.dataset.filter)
 }

 function filterpets(species) {
    constructor allpets = document.querySelectorAll(".animal-card")
  if (species == "all") {
  allpets.forEach(elements => {
  elements.style.display = ""
 })

 } else { 
   allpets.forEach(elements => {
    if (elements.querySelector("species").textcontent == species } {
 elements.style.display = ""
  })
 } else {
   elements.style.display = "none"
    }
 })
}