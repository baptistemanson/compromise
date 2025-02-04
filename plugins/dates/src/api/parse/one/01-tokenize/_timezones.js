// some opinionated-but-common-sense timezone abbreviations
// these timezone abbreviations are wholly made-up by me, Spencer Kelly, with no expertise in geography
// generated humbly from https://github.com/spencermountain/spacetime-informal
import spacetime from 'spacetime'

const america = 'America/'
const asia = 'Asia/'
const europe = 'Europe/'
const africa = 'Africa/'
const aus = 'Australia/'
const pac = 'Pacific/'

const informal = {
  //europe
  'british summer time': europe + 'London',
  bst: europe + 'London',
  'british time': europe + 'London',
  'britain time': europe + 'London',
  'irish summer time': europe + 'Dublin',
  'irish time': europe + 'Dublin',
  ireland: europe + 'Dublin',
  'central european time': europe + 'Berlin',
  cet: europe + 'Berlin',
  'central european summer time': europe + 'Berlin',
  cest: europe + 'Berlin',
  'central europe': europe + 'Berlin',
  'eastern european time': europe + 'Riga',
  eet: europe + 'Riga',
  'eastern european summer time': europe + 'Riga',
  eest: europe + 'Riga',
  'eastern europe time': europe + 'Riga',
  'western european time': europe + 'Lisbon',
  // wet: europe+'Lisbon',
  'western european summer time': europe + 'Lisbon',
  // west: europe+'Lisbon',
  'western europe': europe + 'Lisbon',
  'turkey standard time': europe + 'Istanbul',
  trt: europe + 'Istanbul',
  'turkish time': europe + 'Istanbul',

  //africa
  etc: africa + 'Freetown',
  utc: africa + 'Freetown',
  'greenwich standard time': africa + 'Freetown',
  gmt: africa + 'Freetown',
  'east africa time': africa + 'Nairobi',
  // eat: africa+'Nairobi',
  'east african time': africa + 'Nairobi',
  'eastern africa time': africa + 'Nairobi',
  'central africa time': africa + 'Khartoum',
  // cat: africa+'Khartoum',
  'central african time': africa + 'Khartoum',
  'south africa standard time': africa + 'Johannesburg',
  sast: africa + 'Johannesburg',
  'southern africa': africa + 'Johannesburg',
  'south african': africa + 'Johannesburg',
  'west africa standard time': africa + 'Lagos',
  // wat: africa+'Lagos',
  'western africa time': africa + 'Lagos',
  'west african time': africa + 'Lagos',

  'australian central standard time': aus + 'Adelaide',
  acst: aus + 'Adelaide',
  'australian central daylight time': aus + 'Adelaide',
  acdt: aus + 'Adelaide',
  'australia central': aus + 'Adelaide',
  'australian eastern standard time': aus + 'Brisbane',
  aest: aus + 'Brisbane',
  'australian eastern daylight time': aus + 'Brisbane',
  aedt: aus + 'Brisbane',
  'australia east': aus + 'Brisbane',
  'australian western standard time': aus + 'Perth',
  awst: aus + 'Perth',
  'australian western daylight time': aus + 'Perth',
  awdt: aus + 'Perth',
  'australia west': aus + 'Perth',
  'australian central western standard time': aus + 'Eucla',
  acwst: aus + 'Eucla',
  'australia central west': aus + 'Eucla',
  'lord howe standard time': aus + 'Lord_Howe',
  lhst: aus + 'Lord_Howe',
  'lord howe daylight time': aus + 'Lord_Howe',
  lhdt: aus + 'Lord_Howe',
  'russian standard time': europe + 'Moscow',
  msk: europe + 'Moscow',
  russian: europe + 'Moscow',

  //america
  'central standard time': america + 'Chicago',
  'central time': america + 'Chicago',
  cst: america + 'Havana',
  'central daylight time': america + 'Chicago',
  cdt: america + 'Havana',
  'mountain standard time': america + 'Denver',
  'mountain time': america + 'Denver',
  mst: america + 'Denver',
  'mountain daylight time': america + 'Denver',
  mdt: america + 'Denver',
  'atlantic standard time': america + 'Halifax',
  'atlantic time': america + 'Halifax',
  ast: asia + 'Baghdad',
  'atlantic daylight time': america + 'Halifax',
  adt: america + 'Halifax',
  'eastern standard time': america + 'New_York',
  'eastern': america + 'New_York',
  'eastern time': america + 'New_York',
  est: america + 'New_York',
  'eastern daylight time': america + 'New_York',
  edt: america + 'New_York',
  'pacific time': america + 'Los_Angeles',
  'pacific standard time': america + 'Los_Angeles',
  pst: america + 'Los_Angeles',
  'pacific daylight time': america + 'Los_Angeles',
  pdt: america + 'Los_Angeles',
  'alaskan standard time': america + 'Anchorage',
  'alaskan time': america + 'Anchorage',
  ahst: america + 'Anchorage',
  'alaskan daylight time': america + 'Anchorage',
  ahdt: america + 'Anchorage',
  'hawaiian standard time': pac + 'Honolulu',
  'hawaiian time': pac + 'Honolulu',
  hst: pac + 'Honolulu',
  'aleutian time': pac + 'Honolulu',
  'hawaii time': pac + 'Honolulu',
  'newfoundland standard time': america + 'St_Johns',
  'newfoundland time': america + 'St_Johns',
  nst: america + 'St_Johns',
  'newfoundland daylight time': america + 'St_Johns',
  ndt: america + 'St_Johns',
  'brazil time': america + 'Sao_Paulo',
  brt: america + 'Sao_Paulo',
  brasília: america + 'Sao_Paulo',
  brasilia: america + 'Sao_Paulo',
  'brazilian time': america + 'Sao_Paulo',
  'argentina time': america + 'Buenos_Aires',
  // art: a+'Buenos_Aires',
  'argentinian time': america + 'Buenos_Aires',
  'amazon time': america + 'Manaus',
  amt: america + 'Manaus',
  'amazonian time': america + 'Manaus',
  'easter island standard time': 'Chile/Easterisland',
  east: 'Chile/Easterisland',
  'easter island summer time': 'Chile/Easterisland',
  easst: 'Chile/Easterisland',
  'venezuelan standard time': america + 'Caracas',
  'venezuelan time': america + 'Caracas',
  vet: america + 'Caracas',
  'venezuela time': america + 'Caracas',
  'paraguay time': america + 'Asuncion',
  pyt: america + 'Asuncion',
  'paraguay summer time': america + 'Asuncion',
  pyst: america + 'Asuncion',
  'cuba standard time': america + 'Havana',
  'cuba time': america + 'Havana',
  'cuba daylight time': america + 'Havana',
  'cuban time': america + 'Havana',
  'bolivia time': america + 'La_Paz',
  // bot: a+'La_Paz',
  'bolivian time': america + 'La_Paz',
  'colombia time': america + 'Bogota',
  cot: america + 'Bogota',
  'colombian time': america + 'Bogota',
  'acre time': america + 'Eirunepe',
  // act: a+'Eirunepe',
  'peru time': america + 'Lima',
  // pet: a+'Lima',
  'chile standard time': america + 'Punta_Arenas',
  'chile time': america + 'Punta_Arenas',
  clst: america + 'Punta_Arenas',
  'chile summer time': america + 'Punta_Arenas',
  cldt: america + 'Punta_Arenas',
  'uruguay time': america + 'Montevideo',
  uyt: america + 'Montevideo',

  //asia
  ist: asia + 'Jerusalem',
  'arabic standard time': asia + 'Baghdad',
  'arabic time': asia + 'Baghdad',
  'arab time': asia + 'Baghdad',
  'iran standard time': asia + 'Tehran',
  'iran time': asia + 'Tehran',
  irst: asia + 'Tehran',
  'iran daylight time': asia + 'Tehran',
  irdt: asia + 'Tehran',
  iranian: asia + 'Tehran',
  'pakistan standard time': asia + 'Karachi',
  'pakistan time': asia + 'Karachi',
  pkt: asia + 'Karachi',
  'india standard time': asia + 'Kolkata',
  'indian time': asia + 'Kolkata',
  'indochina time': asia + 'Bangkok',
  ict: asia + 'Bangkok',
  'south east asia': asia + 'Bangkok',
  'china standard time': asia + 'Shanghai',
  ct: asia + 'Shanghai',
  'chinese time': asia + 'Shanghai',
  'alma-ata time': asia + 'Almaty',
  almt: asia + 'Almaty',
  'oral time': asia + 'Oral',
  'orat time': asia + 'Oral',
  'yakutsk time': asia + 'Yakutsk',
  yakt: asia + 'Yakutsk',
  'gulf standard time': asia + 'Dubai',
  'gulf time': asia + 'Dubai',
  gst: asia + 'Dubai',
  uae: asia + 'Dubai',
  'hong kong time': asia + 'Hong_Kong',
  hkt: asia + 'Hong_Kong',
  'western indonesian time': asia + 'Jakarta',
  wib: asia + 'Jakarta',
  'indonesia time': asia + 'Jakarta',
  'central indonesian time': asia + 'Makassar',
  wita: asia + 'Makassar',
  'israel daylight time': asia + 'Jerusalem',
  idt: asia + 'Jerusalem',
  'israel standard time': asia + 'Jerusalem',
  'israel time': asia + 'Jerusalem',
  israeli: asia + 'Jerusalem',
  'krasnoyarsk time': asia + 'Krasnoyarsk',
  krat: asia + 'Krasnoyarsk',
  'malaysia time': asia + 'Kuala_Lumpur',
  myt: asia + 'Kuala_Lumpur',
  'singapore time': asia + 'Singapore',
  sgt: asia + 'Singapore',
  'korea standard time': asia + 'Seoul',
  'korea time': asia + 'Seoul',
  kst: asia + 'Seoul',
  'korean time': asia + 'Seoul',
  'uzbekistan time': asia + 'Samarkand',
  uzt: asia + 'Samarkand',
  'vladivostok time': asia + 'Vladivostok',
  vlat: asia + 'Vladivostok',

  //indian
  'maldives time': 'Indian/Maldives',
  mvt: 'Indian/Maldives',
  'mauritius time': 'Indian/Mauritius',
  mut: 'Indian/Mauritius',

  // pacific
  'marshall islands time': pac + 'Kwajalein',
  mht: pac + 'Kwajalein',
  'samoa standard time': pac + 'Midway',
  sst: pac + 'Midway',
  'somoan time': pac + 'Midway',
  'chamorro standard time': pac + 'Guam',
  chst: pac + 'Guam',
  'papua new guinea time': pac + 'Bougainville',
  pgt: pac + 'Bougainville',
}

//add the official iana zonefile names
let iana = spacetime().timezones
let formal = Object.keys(iana).reduce((h, k) => {
  h[k] = k
  return h
}, {})
export default Object.assign({}, informal, formal)
