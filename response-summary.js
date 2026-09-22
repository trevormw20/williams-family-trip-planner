export function appendResponseSummary(detail,data,catalog){
 if(!data)return;
 const line=(label,value)=>{if(!value)return;const p=document.createElement('p');p.style.whiteSpace='pre-wrap';const strong=document.createElement('strong');strong.textContent=label+': ';p.append(strong,document.createTextNode(value));detail.append(p)};
 for(const [person,rides] of Object.entries(data.avoid||{}))line((catalog.people.find(p=>p.id===person)?.name||person)+' — does not want to ride',rides.map(id=>catalog.rides.find(r=>r.id===id)?.name||id).join(', '));
 line('Other wishes',data.wishes);
 for(const [person,needs] of Object.entries(data.needs||{})){const name=catalog.people.find(p=>p.id===person)?.name||person;line(name+' — food',needs.food);line(name+' — drinks',needs.drinks);line(name+' — allergies',needs.allergies)}
 line('Couple dinner day',data.dinner?.day?'Day '+data.dinner.day:'');line('Couple dinner restaurant',catalog.dinners?.[data.dinner?.restaurant]);line('Couple dinner notes',data.dinner?.notes);
}
