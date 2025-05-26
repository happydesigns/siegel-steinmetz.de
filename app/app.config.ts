export default defineAppConfig({
  app: {
    meta: {
      copyright: {
        copyrightYear: new Date().getFullYear(),
        copyrightHolder: 'happydesigns',
        copyrightHomepage: 'https://happydesigns.de',
      },
    },

    links: {
      footer: [
        {
          label: 'Unternehmen',
          children: [
            {
              label: 'Startseite',
              to: '/',
            },
            {
              label: 'Über uns',
              to: '/ueber-uns',
            },
            {
              label: 'Kontakt',
              to: '/kontakt',
            },
          ],
        },
        {
          label: 'Unsere Leistungen',
          children: [
            {
              label: 'Grabmale',
              to: '/grabmale',
            },
            {
              label: 'Restaurierungen',
              to: '/restaurierungen',
            },
            {
              label: 'Galerien',
              to: '/galerie',
            },
          ],
        },
        {
          label: 'Rechtliches',
          children: [{
            label: 'Impressum',
            to: '/impressum',
          }, {
            label: 'Datenschutz',
            to: '/datenschutz',
          }],
        },
      ],
    },

    gallery: {
      sourceDir: '/assets/images/gallery',
      albums: {
        grabmallager: {
          'tombstone-stock-001.jpg': {
            alt: 'Kalkstein-Grabstein mit Bronzevase',
            title: 'Lichtgrauer Kalkstein-Grabstein mit rechteckiger Aussparung und Bronzevase',
          },
          'tombstone-stock-002.jpg': {
            alt: 'Runder Naturstein-Grabstein',
            title: 'Runder naturfarbener Grabstein als flache Scheibe auf Kiesbett',
          },
          'tombstone-stock-003.jpg': {
            alt: 'Rauer Naturstein-Grabstein',
            title: 'Natürlicher rauer Grabstein in unregelmäßigem braun-grauem Stein',
          },
          'tombstone-stock-004.jpg': {
            alt: 'Geteilter grüner Granit-Grabstein',
            title: 'Moderner grüner Granit-Grabstein als geteilte Scheibe mit Herzmedaillon und Foto',
          },
          'tombstone-stock-005.jpg': {
            alt: 'Roter Granit-Grabstein mit Blütenrelief',
            title: 'Zweibrückiger roter Granit-Grabstein mit filigranem Blütenornament',
          },
          'tombstone-stock-006.jpg': {
            alt: 'Zweifarbiger Grabstein mit Rosenmuster',
            title: 'Schwebender zweifarbiger Grabstein aus dunklem und hellem Granit mit Rosenmotiv',
          },
          'tombstone-stock-007.jpg': {
            alt: 'Sandstein-Grabstein mit Maserung',
            title: 'Hoher Sandstein-Grabstein mit natürlicher Rindenoptik und hellem Farbspiel',
          },
          'tombstone-stock-008.jpg': {
            alt: 'Runder roter Granit-Grabstein',
            title: 'Runder roter Granit-Grabstein mit seitlich eingravierter Rosenblüte',
          },
          'tombstone-stock-009.jpg': {
            alt: 'Geteilter Grabstein mit Rosenrelief',
            title: 'Zweiseitiger Granit-Grabstein mit eingesetztem Rosenrelief und polierter Fläche',
          },
          'tombstone-stock-010.jpg': {
            alt: 'Grauer Grabstein mit Bronze-Kreuz',
            title: 'Grauer Granit-Grabstein mit aufgesetztem bronzenen Kreuzornament',
          },
          'tombstone-stock-011.jpg': {
            alt: 'Schwarzer Grabstein mit Rosenornament',
            title: 'Schwarzer Granitgrabstein mit eingravierter Rosenblüte',
          },
          'tombstone-stock-012.jpg': {
            alt: 'Hellgrauer Grabstein mit Rosenrelief',
            title: 'Hellgrauer Grabstein mit floraler Rosengravur am Kopf',
          },
          'tombstone-stock-013.jpg': {
            alt: 'Roter Grabstein mit Kreuzausschnitt',
            title: 'Rötlicher Granitgrabstein mit negativem Kreuzausschnitt und Namensgravur',
          },
          'tombstone-stock-014.jpg': {
            alt: 'Säulengrabstein mit Rundfenster',
            title: 'Schlichter sandfarbener Säulengrabstein mit rundem Ausschnitt',
          },
          'tombstone-stock-015.jpg': {
            alt: 'Geteilter Grabstein mit Rosenmedaille',
            title: 'Geteilter blaugrauer Granitgrabstein mit eingearbeitetem Rosenmedaillon',
          },
          'tombstone-stock-016.jpg': {
            alt: 'Weißer Grabstein mit Reliefrand',
            title: 'Moderner weißer Grabstein mit geometrischem Reliefband am Kopf',
          },
          'tombstone-stock-017.jpg': {
            alt: 'Flacher Grabstein mit Kreuzrelief',
            title: 'Horizontale Granitplatte mit Kreuz- und betenden Händen-Relief',
          },
          'tombstone-stock-018.jpg': {
            alt: 'Natursteinblock als Grabstein',
            title: 'Unregelmäßiger Sandsteinblock mit natürlicher Maserung',
          },
          'tombstone-stock-019.jpg': {
            alt: 'Grabstein mit zylindrischem Einsatz',
            title: 'Grabstein mit dunkler Platte und hellem zylindrischem Mittelsäule',
          },
          'tombstone-stock-020.jpg': {
            alt: 'Zwillingsgrabstein mit Bronzereliefs',
            title: 'Zwei raue Natursteinsäulen mit bronzenen Reliefs',
          },
          'tombstone-stock-021.jpg': {
            alt: 'Speckter Grabstein mit Baumornament',
            title: 'Speckter Granit-Grabstein mit kreisförmiger Aussparung und metallischem Baummotiv',
          },
          'tombstone-stock-022.jpg': {
            alt: 'Schwarzer Grabstein mit Rosenrelief',
            title: 'Schwarzer Granit-Grabstein mit stilisierter Rosengravur und goldfarbener Raute',
          },
          'tombstone-stock-023.jpg': {
            alt: 'Brauner Grabstein mit Kreuzausschnitt',
            title: 'Brauner Grabstein mit eingearbeitetem Kreuzausschnitt in runder Vertiefung',
          },
          'tombstone-stock-024.jpg': {
            alt: 'Rauer Naturstein-Grabstein',
            title: 'Unregelmäßig geformter rauer Naturstein-Grabstein',
          },
          'tombstone-stock-025.jpg': {
            alt: 'Grabstein mit Ammonitenfossil',
            title: 'Sandstein-Grabstein mit freigelegtem Ammoniten-Fossil und Namensgravur',
          },
          'tombstone-stock-026.jpg': {
            alt: 'Rötlich-schwarzer Grabstein mit Rosenkreuz',
            title: 'Rötlich-schwarzer Granit-Grabstein mit Kreuz- und Rosenrelief',
          },
          'tombstone-stock-027.jpg': {
            alt: 'Herzförmiger Grabstein mit Rosenmotiv',
            title: 'Herzförmiger Granitgrabstein mit eingravierter Rosenblüte',
          },
          'tombstone-stock-028.jpg': {
            alt: 'Dunkelgrüner Grabstein mit weißen Adern',
            title: 'Dunkelgrüner Naturstein-Grabstein mit kontrastreichen weißen Maserungsadern',
          },
          'tombstone-stock-029.jpg': {
            alt: 'Brauner Grabstein mit goldener Winkeldekoration',
            title: 'Brauner Granit-Grabstein mit goldfarbenem Eckornament am Kopf',
          },
          'tombstone-stock-030.jpg': {
            alt: 'Geteilter Grabstein mit Schmetterlingen',
            title: 'Geteilter Granit-Grabstein mit Schmetterlings- und Gräsergravur',
          },
          'tombstone-stock-031.jpg': {
            alt: 'Zweifarbiger Grabstein mit Blattornament',
            title: 'Geteilter Grabstein in Schwarz und Sandstein mit graviertem Blattzweig',
          },
          'tombstone-stock-032.jpg': {
            alt: 'Grabstein mit Engelsskulptur',
            title: 'Rötlich-grauer Granitgrabstein, flankiert von steinerner Engelsskulptur',
          },
          'tombstone-stock-033.jpg': {
            alt: 'Sandstein-Grabstein mit blauer Blüte',
            title: 'Rauer Sandstein-Grabstein mit handbemaltem blauen Blumenmotiv',
          },
          'tombstone-stock-034.jpg': {
            alt: 'Rauer Granit-Grabstein',
            title: 'Schlichter, unregelmäßig geformter grauer Granitblock',
          },
        },
        grabmalreferenzen: {
          'tombstone-references-001.jpg': {
            alt: 'Granit-Gedenkstein mit Rosen-Gravur',
            title: 'Doppelgrabstein aus hellem und dunklem Granit mit Rosenornament, umgeben von farbigen Topfpflanzen und Grablicht',
          },
          'tombstone-references-002.jpg': {
            alt: 'Zweifarbiger Grabstein mit Datumsgravur',
            title: 'Hell- und dunkelgrauer Grabstein mit Geburts- und Sterbedatum',
          },
          'tombstone-references-003.jpg': {
            alt: 'Schlichter dunkler Grabstein mit Kreuz',
            title: 'Glatt polierter dunkler Granitgrabstein mit Metallkreuz und Inschrift',
          },
          'tombstone-references-004.jpg': {
            alt: 'Heller Grabstein mit Treppen-Motiv',
            title: 'Hellgrauer Grabstein mit Stufenornament, Messingfigur und weißen Blumen',
          },
          'tombstone-references-005.jpg': {
            alt: 'Rötlich-brauner Grabstein mit betenden Händen',
            title: 'Rötlich-brauner Grabstein mit Kreuz und betenden Händen, dekoriertes Blumenbeet',
          },
          'tombstone-references-006.jpg': {
            alt: 'Zweifarbiger Grabstein mit Kiesbett und Laterne',
            title: 'Split-Design-Grabstein aus hellem und dunklem Granit, umgeben von schwarzem Kies und Laterne',
          },
          'tombstone-references-007.jpg': {
            alt: 'Hellgrauer Grabstein mit Bodendeckerpflanzen',
            title: 'Grauer Grabstein umgeben von weiß blühenden Bodendeckern und Laterne',
          },
          'tombstone-references-008.jpg': {
            alt: 'Beiger Grabstein mit Metallkreuz',
            title: 'Beiger Granitgrabstein mit aufgesetztem Metallkreuz, umrahmt von Herbstpflanzen',
          },
          'tombstone-references-009.jpg': {
            alt: 'Weißer Ovalgrabstein mit Reliefformen',
            title: 'Organisch geformter weißer Grabstein mit Blattelementen und Heidepflanzen',
          },
          'tombstone-references-010.jpg': {
            alt: 'Moderner Grabstein mit rechteckiger Aussparung',
            title: 'Geradliniger heller Grabstein mit rechteckiger Aussparung, Laterne und umlaufendem Rahmen',
          },
          'tombstone-references-011.jpg': {
            alt: 'Ovaler rosa Grabstein mit Kreuz',
            title: 'Ovaler rosafarbener Grabstein mit eingraviertem Kreuz und bepflanztem Blumenbeet',
          },
          'tombstone-references-012.jpg': {
            alt: 'Dunkler Grabstein mit Blumenbeet',
            title: 'Dunkler Granitgrabstein mit rosa Osteospermum und weißem Bodendecker',
          },
          'tombstone-references-013.jpg': {
            alt: 'Beiger und schwarzer Grabstein mit Kerze',
            title: 'Zweifarbiger Grabstein mit integriertem Laternenfach und bunten Pflanzen',
          },
          'tombstone-references-014.jpg': {
            alt: 'Naturstein mit roter Namensschrift',
            title: 'Rauer Steinblock mit roter Gravur',
          },
          'tombstone-references-015.jpg': {
            alt: 'Rot-grauer Grabstein mit Rosenkreuz',
            title: 'Getigerter Granitgrabstein mit Kreuz- und Rosenrelief im Schneefall',
          },
          'tombstone-references-016.jpg': {
            alt: 'Heller Grabstein mit Trockenarrangement',
            title: 'Hellbeiger Grabstein mit Trockenblumen, Wurzelholz und Sukkulenten',
          },
          'tombstone-references-017.jpg': {
            alt: 'Dreiteiliger Grabstein mit goldener Schrift',
            title: 'Dunkler Dreiteiler mit goldenen Namen und Lavendelbepflanzung',
          },
          'tombstone-references-018.jpg': {
            alt: 'Speckiger Grabstein mit Stufensymbol',
            title: 'Speckgranitgrabstein mit goldener Stufen-Silhouette und Namensgravur',
          },
          'tombstone-references-019.jpg': {
            alt: 'Grüner Findling als Grabstein',
            title: 'Unregelmäßiger grüner Stein mit Inschrift und Bodendeckerpflanzen',
          },
          'tombstone-references-020.jpg': {
            alt: 'Brauner Grabstein mit Kreuzgravur',
            title: 'Rötlich-brauner Grabstein mit Kreuz- und Rosenmotiv, umgeben von Silberblatt',
          },
          'tombstone-references-021.jpg': {
            alt: 'Zwillingsgrabstein mit Kreuzmedaille',
            title: 'Zwei schmale dunkle Grabsteine mit Kupferkreuz und Inschrift',
          },
          'tombstone-references-022.jpg': {
            alt: 'Dreiteiliger Granitgrabstein mit Metallbaum',
            title: 'Speckter Granitgrabstein in drei Teilen mit mittigem Baumornament und Inschriften',
          },
          'tombstone-references-023.jpg': {
            alt: 'Sandstein-Grabstein mit Ammonitenfossil',
            title: 'Rauer Sandsteinblock als Grabstein mit freigelegtem Ammonitenfossil und Namensgravur',
          },
          'tombstone-references-024.jpg': {
            alt: 'Doppelgrabstein aus Naturstein mit Bronzereliefs',
            title: 'Zwei raue Natursteinplatten mit bronzenen Reliefs von Fenster und Inschriften',
          },
        },
        restaurierungen: {
          'restorations-001.jpg': {
            alt: 'Gesamtansicht Fassade',
            title: 'Dreistöckiges historisches Sandsteinhaus mit Stufengiebel, Rundbogenportal und mehrteiligen Fenstern.',
          },
          'restorations-002.jpg': {
            alt: 'Spitzbogenfenster',
            title: 'Paar gotischer Spitzbogenfenster in gelb-ockerfarbener Backsteinwand mit geschlossenen Klappläden.',
          },
          'restorations-003.jpg': {
            alt: 'Oberer Fassadendetail',
            title: 'Zwei offene Fenster mit breiter Steinfassung und rundem Wappenornament im Gesims.',
          },
          'restorations-004.jpg': {
            alt: 'Säulenfuß',
            title: 'Frisch gearbeitete Rundsäule auf quadratischem Plinth aus hellem Sandstein am Sockel.',
          },
          'restorations-005.jpg': {
            alt: 'Fensterlaibung unten',
            title: 'Unterer Steinsims einer Laibung mit temporärem Holzverschluss und Putzresten.',
          },
          'restorations-006.jpg': {
            alt: 'Sandsteinecke im Bau',
            title: 'Neu zugeschnittener Sandsteinblock als Wandaufsatz, daneben Holzverschalung und Baukette.',
          },
          'restorations-007.jpg': {
            alt: 'Metallfenster',
            title: 'Rechteckiges Stahlprofilfenster mit neuer Verglasung, eingebettet in raues Natursteinmauerwerk.',
          },
        },
      },
    },
  },

  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc',
    },
  },

  uiPro: {
    footer: {
      slots: {
        root: 'bg-gradient-to-b from-gray-800 to-raisin-cool dark:from-raisin-cool dark:to-raisin',
        top: 'dark border-b border-neutral-700',
        container: 'dark',
      },
    },
    footerColumns: {
      slots: {
        root: 'xl:grid-cols-5',
        center: 'xl:col-span-3',
        right: 'xl:col-span-2',
      },
    },
  },

  links: {
    header: [
      {
        label: 'Über uns',
        icon: 'i-ph-users-duotone',
        to: '/ueber-uns',
      },
      {
        label: 'Grabmale',
        description: 'Ein sichtbares und individuelles Andenken an einen geliebten Menschen.',
        icon: 'i-ph-cross-duotone',
        to: '/grabmale',
      },
      {
        label: 'Restaurierungen',
        description: 'Fachgemäße Restaurierung von historischen Gebäuden, Baudenkmalen und Bildhauerarbeiten.',
        icon: 'i-ph-bank-duotone',
        to: '/restaurierungen',
      },
      {
        label: 'Galerie',
        icon: 'i-ph-image-duotone',
        to: '/galerie',
      },
    ],
    footer: [{
      label: 'Unternehmen',
      children: [{
        label: 'Startseite',
        to: '/',
      }, {
        label: 'Über uns',
        to: '/ueber-uns',
      }, {
        label: 'Kontakt',
        to: '/kontakt',
      }],
    }, {
      label: 'Unsere Leistungen',
      children: [{
        label: 'Grabmale',
        to: '/grabmale',
      }, {
        label: 'Restaurierungen',
        to: '/restaurierungen',
      }, {
        label: 'Galerie',
        to: '/galerie',
      }],
    }, {
      label: 'Rechtliches',
      children: [{
        label: 'Impressum',
        to: '/impressum',
      }, {
        label: 'Datenschutz',
        to: '/datenschutz',
      }],
    }],
  },
})
