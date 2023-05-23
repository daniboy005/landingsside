function endreSprak() {
  var sprakValgElement = document.getElementById('sprakValg');
  var valgtSprak = sprakValgElement.value;

  var overskriftElementer = document.querySelectorAll('h2');
  var paragrafElementer = document.querySelectorAll('p');
  var knappElementer = document.querySelectorAll('button');
  var lenkeElementer = document.querySelectorAll('a');

  for (var i = 0; i < overskriftElementer.length; i++) {
    var overskriftId = overskriftElementer[i].id;
    var oversettelse = hentOversettelse(valgtSprak, overskriftId);
    overskriftElementer[i].innerText = oversettelse || '';
  }

  for (var j = 0; j < paragrafElementer.length; j++) {
    var paragrafId = paragrafElementer[j].id;
    var oversettelse = hentOversettelse(valgtSprak, paragrafId);
    paragrafElementer[j].innerText = oversettelse || '';
  }

  for (var k = 0; k < knappElementer.length; k++) {
    var knappId = knappElementer[k].id;
    var oversettelse = hentOversettelse(valgtSprak, knappId);
    knappElementer[k].innerText = oversettelse || '';
  }

  for (var l = 0; l < lenkeElementer.length; l++) {
    var lenkeId = lenkeElementer[l].id;
    var oversettelse = hentOversettelse(valgtSprak, lenkeId);
    lenkeElementer[l].innerText = oversettelse || '';
  }
}

function hentOversettelse(sprak, elementId) {
  var oversettelser = {
    no: {
      heroOverskrift: 'Velkommen til Endre språk - Example',
      heroTekst: 'Vi leverer skreddersydde webdesignløsninger som er tilgjengelige for alle.',
      produkterOverskrift: 'Våre produkter',
      forstorOverskrift: 'Forstør/minsk tekst',
      forstorTekst: 'Her kan du legge til tekst og eventuelt implementere funksjonalitet for å forstørre eller forminske tekststørrelsen.',
      sprak: 'Endre språk',
      footerTekst: '&copy; 2023 Endre språk - Example. Alle rettigheter reservert.',
      'forstor-knapp': 'Forstør',
      'forminsk-knapp': 'Forminsk',
      seVareProdukter: 'Se våre produkter',
      nettsideWordpress: 'Nettside i Wordpress',
      driftNettside: 'Drift av nettside',
      strategiskKommunikasjon: 'Strategisk kommunikasjon',
      systemdokumentasjon: 'Systemdokumentasjon',
      nettpresentasjoner: 'Nettpresentasjoner',
      nettvideoSosialeMedier: 'Nettvideo til sosiale medier'
    },
    en: {
      heroOverskrift: 'Welcome to Change Language - Example',
      heroTekst: 'We deliver customized web design solutions accessible to everyone.',
      produkterOverskrift: 'Our Products',
      forstorOverskrift: 'Enlarge/Reduce Text',
      forstorTekst: 'Here you can add text and optionally implement functionality to enlarge or reduce the text size.',
      sprak: 'Change Language',
      footerTekst: '&copy; 2023 Change Language - Example. All rights reserved.',
      'forstor-knapp': 'Enlarge',
      'forminsk-knapp': 'Reduce',
      seVareProdukter: 'See our products',
      nettsideWordpress: 'Website in Wordpress',
      driftNettside: 'Website hosting',
      strategiskKommunikasjon: 'Strategic communication',
      systemdokumentasjon: 'System documentation',
      nettpresentasjoner: 'Online presentations',
      nettvideoSosialeMedier: 'Social media videos'
    },
    fr: {
      heroOverskrift: 'Bienvenue sur Changer de langue - Exemple',
      heroTekst: 'Nous proposons des solutions de conception Web personnalisées accessibles à tous.',
      produkterOverskrift: 'Nos produits',
      forstorOverskrift: 'Agrandir/Réduire le texte',
      forstorTekst: "Ici, vous pouvez ajouter du texte et éventuellement implémenter une fonctionnalité pour agrandir ou réduire la taille du texte.",
      sprak: 'Changer de langue',
      footerTekst: '&copy; 2023 Changer de langue - Exemple. Tous droits réservés.',
      'forstor-knapp': 'Agrandir',
      'forminsk-knapp': 'Réduire',
      seVareProdukter: 'Voir nos produits',
      nettsideWordpress: 'Site Web sous Wordpress',
      driftNettside: 'Hébergement de site Web',
      strategiskKommunikasjon: 'Communication stratégique',
      systemdokumentasjon: 'Documentation système',
      nettpresentasjoner: 'Présentations en ligne',
      nettvideoSosialeMedier: 'Vidéos pour les réseaux sociaux'
    },
    is: {
      heroOverskrift: 'Velkomin í Breyta tungumáli - Dæmi',
      heroTekst: 'Við bjóðum upp á sérsniðnar vefhönnunarlausnir sem eru aðgengilegar öllum.',
      produkterOverskrift: 'Vörur okkar',
      forstorOverskrift: 'Stækka/minnka texta',
      forstorTekst: 'Hér geturðu bætt við texta og valfrjálst útfært virkni til að auka eða minnka textastærðina.',
      sprak: 'Skipta um tungumál',
      footerTekst: '&copy; 2023 Breyta tungumáli - Dæmi. Allur réttur áskilinn.',
      'forstor-knapp': 'Stækka',
      'forminsk-knapp': 'Skreppa saman',
      seVareProdukter: 'Sjá vörur okkar',
      nettsideWordpress: 'Vefsíða í Wordpress',
      driftNettside: 'Rekstur vefsíðu',
      strategiskKommunikasjon: 'Stefnumótísk samskipti',
      systemdokumentasjon: 'Kerfisskjöl',
      nettpresentasjoner: 'Kynningar á netinu',
      nettvideoSosialeMedier: 'Myndband á netinu fyrir samfélagsmiðla'
    }
  };

  var oversettelse = oversettelser[sprak][elementId];

  if (oversettelse === undefined) {
    return ''; // Return an empty string if translation is missing
  }

  return oversettelse;
}

function endreTekstStorrelse(endring) {
  var tekstForstorElement = document.getElementById('forstorTekst');
  var currentFontSize = window.getComputedStyle(tekstForstorElement).getPropertyValue('font-size');
  var currentFontSizeNumeric = parseFloat(currentFontSize);
  var newFontSize = currentFontSizeNumeric + endring;
  tekstForstorElement.style.fontSize = newFontSize + 'px';
}
