const audios = document.getElementsByTagName('audio')

for (const audio of audios) {
  audio.volume = 0.5
}

// const months = [
//   'Nivôse',
//   'Pluviôse',
//   'Ventôse',
//   'Germinal',
//   'Floréal',
//   'Prairial',
//   'Messidor',
//   'Thermidor',
//   'Fructidor',
//   'Vendémiaire',
//   'Brumaire',
//   'Frimaire',
// ]
// const date = '05-08, 2021'

// const originalMonth = Number(date.split('-')[0])
// const originalDayYear = date.split('-')[1]

// let newDate = months[originalMonth] + ' ' + originalDayYear
