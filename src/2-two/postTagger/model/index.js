import adj from './adjective/adjective.js'
import advAdj from './adjective/adj-adverb.js'
import gerundAdj from './adjective/adj-gerund.js'
import nounAdj from './adjective/adj-noun.js'
import adjVerb from './adjective/adj-verb.js'

import adv from './adverb.js'

import dates from './dates/date-phrase.js'
import ambigDates from './dates/date.js'

import noun from './nouns/nouns.js'
import gerundNouns from './verbs/noun-gerund.js'
import presNouns from './verbs/verb-noun.js'

import money from './numbers/money.js'
import fractions from './numbers/fractions.js'
import numbers from './numbers/numbers.js'

import person from './person/person-phrase.js'
import personName from './person/ambig-name.js'

import verbs from './verbs/verbs.js'
import auxiliary from './verbs/auxiliary.js'
import phrasal from './verbs/phrasal.js'
import imperative from './verbs/imperative.js'
import adjGerund from './verbs/adj-gerund.js'

import misc from './_misc.js'

import orgs from './orgs/organizations.js'
import places from './nouns/places.js'
import conjunctions from './conjunctions.js'

let matches = [].concat(
  adj,
  advAdj,
  gerundAdj,
  nounAdj,
  adv,
  ambigDates,
  dates,
  noun,
  gerundNouns,
  presNouns,
  money,
  fractions,
  numbers,
  person,
  personName,
  verbs,
  adjVerb,
  auxiliary,
  phrasal,
  imperative,
  adjGerund,
  misc,
  orgs,
  places,
  conjunctions
)
export default {
  two: {
    matches,
  },
}
