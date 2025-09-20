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
        grabmallager: [
          {
            src: 'tombstone-stock-limestone-vase.jpg',
            alt: 'Kalkstein-Grabstein mit Bronzevase',
            title: 'Lichtgrauer Kalkstein-Grabstein mit rechteckiger Aussparung und Bronzevase',
          },
          {
            src: 'tombstone-stock-duotone-rose.jpg',
            alt: 'Zweifarbiger Grabstein mit Rosenmuster',
            title: 'Schwebender zweifarbiger Grabstein aus dunklem und hellem Granit mit Rosenmotiv',
          },
          {
            src: 'tombstone-stock-sandstone-bark.jpg',
            alt: 'Sandstein-Grabstein mit Maserung',
            title: 'Hoher Sandstein-Grabstein mit natürlicher Rindenoptik und hellem Farbspiel',
          },
          {
            src: 'tombstone-stock-split-rose-relief.jpg',
            alt: 'Geteilter Grabstein mit Rosenrelief',
            title: 'Zweiseitiger Granit-Grabstein mit eingesetztem Rosenrelief und polierter Fläche',
          },
          {
            src: 'tombstone-stock-black-rose.jpg',
            alt: 'Schwarzer Grabstein mit Rosenornament',
            title: 'Schwarzer Granitgrabstein mit eingravierter Rosenblüte',
          },
          {
            src: 'tombstone-stock-lightgray-rose.jpg',
            alt: 'Hellgrauer Grabstein mit Rosenrelief',
            title: 'Hellgrauer Grabstein mit floraler Rosengravur am Kopf',
          },
          {
            src: 'tombstone-stock-red-cross-cutout.jpg',
            alt: 'Roter Grabstein mit Kreuzausschnitt',
            title: 'Rötlicher Granitgrabstein mit negativem Kreuzausschnitt und Namensgravur',
          },
          {
            src: 'tombstone-stock-split-rose-medallion.jpg',
            alt: 'Geteilter Grabstein mit Rosenmedaille',
            title: 'Geteilter blaugrauer Granitgrabstein mit eingearbeitetem Rosenmedaillon',
          },
          {
            src: 'tombstone-stock-cylinder-insert.jpg',
            alt: 'Grabstein mit zylindrischem Einsatz',
            title: 'Grabstein mit dunkler Platte und hellem zylindrischem Mittelsäule',
          },
          {
            src: 'tombstone-stock-brown-cross-cutout.jpg',
            alt: 'Brauner Grabstein mit Kreuzausschnitt',
            title: 'Brauner Grabstein mit eingearbeitetem Kreuzausschnitt in runder Vertiefung',
          },
          {
            src: 'tombstone-stock-rough-brown-block.jpg',
            alt: 'Rauer Naturstein-Grabstein',
            title: 'Unregelmäßig geformter rauer Naturstein-Grabstein',
          },
          {
            src: 'tombstone-stock-red-black-cross-rose.jpg',
            alt: 'Rötlich-schwarzer Grabstein mit Rosenkreuz',
            title: 'Rötlich-schwarzer Granit-Grabstein mit Kreuz- und Rosenrelief',
          },
          {
            src: 'tombstone-stock-green-veins.jpg',
            alt: 'Dunkelgrüner Grabstein mit weißen Adern',
            title: 'Dunkelgrüner Naturstein-Grabstein mit kontrastreichen weißen Maserungsadern',
          },
          {
            src: 'tombstone-stock-angel-sculpture.jpg',
            alt: 'Grabstein mit Engelsskulptur',
            title: 'Rötlich-grauer Granitgrabstein, flankiert von steinerner Engelsskulptur',
          },
          {
            src: 'tombstone-stock-sandstone-blue-flower.jpg',
            alt: 'Sandstein-Grabstein mit blauer Blüte',
            title: 'Rauer Sandstein-Grabstein mit handbemaltem blauen Blumenmotiv',
          },
          {
            src: 'tombstone-stock-black-red-split.jpg',
            alt: 'Geteilter rot-schwarzer Granit-Grabstein',
            title: 'Moderner rot-schwarzer Granit-Grabstein mit kontrastierendem schwarzem Segment',
          },
          {
            src: 'tombstone-stock-sandstone-vertical.jpg',
            alt: 'Heller Sandstein-Grabstein mit Maserung',
            title: 'Hoher heller Sandstein-Grabstein mit natürlicher senkrechter Maserung',
          },
          {
            src: 'tombstone-stock-split-rose-arc.jpg',
            alt: 'Geteilter Grabstein mit Rosenmotiv',
            title: 'Geschwungener zweiteiliger Grabstein mit eingraviertem Rosenornament',
          },
          {
            src: 'tombstone-stock-gray-cross-rays.jpg',
            alt: 'Grauer Grabstein mit Kreuz und Strahlenmotiv',
            title: 'Zweiteiliger Granit-Grabstein mit Kreuz und radialem Strahlenrelief',
          },
          {
            src: 'tombstone-stock-light-sandstone-cross.jpg',
            alt: 'Heller Grabstein mit schwarzem Kreuz',
            title: 'Heller Sandstein-Grabstein mit aufgesetztem schwarzem Kreuz und Sockel',
          },
          {
            src: 'tombstone-stock-black-rose-colored.jpg',
            alt: 'Schwarzer Grabstein mit farbiger Rose',
            title: 'Schwarzer Grabstein mit aufgesetztem Rosenrelief in Rot und Grün',
          },
          {
            src: 'tombstone-stock-red-black-cross-stars.jpg',
            alt: 'Roter Grabstein mit Kreuz und Sternornament',
            title: 'Rot-schwarzer Granit-Grabstein mit eingravierten Sternen und aufgesetztem Kreuz',
          },
          {
            src: 'tombstone-stock-gray-waves.jpg',
            alt: 'Grauer Grabstein mit Wellenrelief',
            title: 'Schlicht gestalteter grauer Grabstein mit drei waagerechten Wellenlinien',
          },
          {
            src: 'tombstone-stock-cylinder-granite.jpg',
            alt: 'Zylindrischer Granit-Grabstein',
            title: 'Moderner zylindrischer Granit-Grabstein auf quadratischer Umrandung mit Kiesbett',
          },
          {
            src: 'tombstone-stock-split-willow.jpg',
            alt: 'Geteilter Grabstein mit Weidenmotiv',
            title: 'Schwarzer und heller Granit-Grabstein mit eingraviertem Weidenzweig',
          },
          {
            src: 'tombstone-stock-red-roses-relief.jpg',
            alt: 'Roter Granit-Grabstein mit Rosenornament',
            title: 'Dunkelroter Granit-Grabstein mit appliziertem silbernen Rosenrelief',
          },
          {
            src: 'tombstone-stock-black-leaf-shape.jpg',
            alt: 'Schwarzer Grabstein in Blattform',
            title: 'Polierter schwarzer Naturstein-Grabstein in geschwungener Blattform',
          },
          {
            src: 'tombstone-stock-green-split-rose.jpg',
            alt: 'Grüner Grabstein mit Rosenrelief',
            title: 'Grün gemaserter Granit-Grabstein mit schwarzer Seite und eingravierter Rose',
          },
          {
            src: 'tombstone-stock-heart-white-black.jpg',
            alt: 'Herzförmiger Grabstein in Schwarz und Weiß',
            title: 'Schwarzer Grabstein mit hellem Herzfeld und floraler Rosenverzierung',
          },
          {
            src: 'tombstone-stock-gray-pebble-inlay.jpg',
            alt: 'Grauer Grabstein mit Kieselstein-Einlage',
            title: 'Schlichter grauer Naturstein-Grabstein mit vertikaler Einlage aus runden Kieselsteinen',
          },
          {
            src: 'tombstone-stock-split-cross-stars.jpg',
            alt: 'Geteilter Grabstein mit Kreuz und Sternen',
            title: 'Zweiteiliger Grabstein aus dunklem und rötlichem Naturstein mit aufgesetztem Metallkreuz und Sternenmotiv',
          },
          {
            src: 'tombstone-stock-butterflies-split.jpg',
            alt: 'Geteilter Grabstein mit Schmetterlingsmotiv',
            title: 'Moderner geteilter Grabstein aus hellem und dunklem Granit mit farbigen Schmetterlingsornamenten',
          },
          {
            src: 'tombstone-stock-green-stairs-door.jpg',
            alt: 'Grüner Grabstein mit Treppen- und Türrelief',
            title: 'Grünlicher Naturstein-Grabstein mit reliefartigen Treppenstufen und Türmotiv',
          },
          {
            src: 'tombstone-stock-rough-gray-block.jpg',
            alt: 'Grauer Naturstein-Grabstein',
            title: 'Rauer grauer Naturstein-Grabstein in blockartiger Form mit heller Maserung',
          },
          {
            src: 'tombstone-stock-dark-curved-slab.jpg',
            alt: 'Dunkler Grabstein in geschwungener Form',
            title: 'Schwarzer Granit-Grabstein mit leicht gebogener, polierter Oberfläche',
          },
          {
            src: 'tombstone-stock-brown-pebble-inlay.jpg',
            alt: 'Brauner Grabstein mit Kieseleinlage',
            title: 'Brauner Naturstein-Grabstein mit vertikal eingelassener Kieselsteinreihe',
          },
          {
            src: 'tombstone-stock-black-metal-inlay.jpg',
            alt: 'Schwarzer Grabstein mit Metalleinlage',
            title: 'Rechteckiger schwarzer Grabstein mit horizontaler und vertikaler Metalleinlage in Kreuzform',
          },
          {
            src: 'tombstone-stock-gray-rectangle-flat.jpg',
            alt: 'Grauer liegender Grabstein',
            title: 'Schlichter rechteckiger Grabstein aus grauem Granit mit feiner Maserung, flach liegend',
          },
          {
            src: 'tombstone-stock-brown-rectangle-flat.jpg',
            alt: 'Brauner liegender Grabstein',
            title: 'Polierter rechteckiger Grabstein aus braun-grauem Granit, flach liegend',
          },
          {
            src: 'tombstone-stock-light-pebble-inlay.jpg',
            alt: 'Heller Grabstein mit Kieseleinlage',
            title: 'Moderner heller Grabstein mit vertikal eingelassener bunten Kieselsteinreihe',
          },
          {
            src: 'tombstone-stock-black-heart-pebbles.jpg',
            alt: 'Schwarzer Grabstein mit Herzform aus Kieseln',
            title: 'Moderner schwarzer Grabstein mit eingelassenem Herzornament aus kleinen Kieseln',
          },
          {
            src: 'tombstone-stock-gray-arched-pebbles.jpg',
            alt: 'Grauer Grabstein mit Kieselbogen',
            title: 'Schlichter grauer Grabstein mit bogenförmig eingelassener Kieselsteinreihe',
          },
          {
            src: 'tombstone-stock-gray-butterfly-relief.jpg',
            alt: 'Grauer Grabstein mit Schmetterlingsrelief',
            title: 'Naturstein-Grabstein mit eingearbeitetem Schmetterlingsrelief im oberen Bereich',
          },
          {
            src: 'tombstone-stock-red-curved-design.jpg',
            alt: 'Roter Grabstein mit geschwungenem Relief',
            title: 'Roter Granit-Grabstein mit geschwungener Relieflinie über die gesamte Höhe',
          },
          {
            src: 'tombstone-stock-gray-leaves-relief.jpg',
            alt: 'Grauer Grabstein mit Blätterrelief',
            title: 'Schlichter grauer Grabstein mit plastisch ausgearbeitetem Blätterornament im oberen Bereich',
          },
          {
            src: 'tombstone-stock-green-pebble-inlay.jpg',
            alt: 'Grünlicher Grabstein mit Kieseleinlage',
            title: 'Grünlich-grauer Granit-Grabstein mit schmaler vertikaler Kieseleinlage auf der linken Seite',
          },
          {
            src: 'tombstone-stock-sunset-sea.jpg',
            alt: 'Grabstein mit Sonnenuntergang und Meer',
            title: 'Grünlich-grauer Grabstein mit eingravierter Darstellung von Sonnenuntergang, Meer, Möwen und Muscheln',
          },
          {
            src: 'tombstone-stock-dark-wavy-line.jpg',
            alt: 'Dunkler Grabstein mit geschwungener Linie',
            title: 'Dunkler Granit-Grabstein mit heller geschwungener Zierlinie und Mustergravur',
          },
          {
            src: 'tombstone-stock-sunset-sea-inscription.jpg',
            alt: 'Grabstein mit Sonnenuntergang und Gravur',
            title: 'Grabstein mit Sonnenuntergangs-Relief, Meer und Möwen, kombiniert mit eingravierter Inschrift',
          },
          {
            src: 'tombstone-stock-brown-leaf-cutout.jpg',
            alt: 'Brauner Grabstein mit Blätterausschnitt',
            title: 'Brauner Naturstein-Grabstein mit seitlichem Ausschnitt und plastischem Blätterrelief',
          },
          {
            src: 'tombstone-stock-gray-heart-cutout.jpg',
            alt: 'Grauer Grabstein mit Herz-Ausschnitt',
            title: 'Schlichter grauer Grabstein mit herzförmigem Ausschnitt im oberen Bereich',
          },
          {
            src: 'tombstone-stock-dark-pebble-vertical.jpg',
            alt: 'Dunkler Grabstein mit Kieseleinlage',
            title: 'Moderner dunkler Grabstein mit vertikaler Reihe eingelassener Kieselsteine',
          },
          {
            src: 'tombstone-stock-gray-flat-inscription.jpg',
            alt: 'Grauer liegender Grabstein mit Inschrift',
            title: 'Rechteckiger grauer Naturstein-Grabstein mit dezent eingravierter Inschrift, flach liegend',
          },
          {
            src: 'tombstone-stock-red-pebble-vertical.jpg',
            alt: 'Roter Grabstein mit Kieseleinlage',
            title: 'Roter Naturstein-Grabstein mit vertikal eingelassener Kieselsteinreihe',
          },
          {
            src: 'tombstone-stock-gray-butterfly-cutout.jpg',
            alt: 'Grauer Grabstein mit Schmetterlingsausschnitt',
            title: 'Moderner grauer Grabstein mit schmetterlingsförmigem Kieselausschnitt im oberen Bereich',
          },
          {
            src: 'tombstone-stock-heart-shape-bicolor.jpg',
            alt: 'Herzförmiger Grabstein aus zwei Steinsorten',
            title: 'Herzförmiger Grabstein aus dunklem und rötlichem Stein kombiniert, auf schwarzem Sockel',
          },
          {
            src: 'tombstone-stock-green-wavy-pebbles.jpg',
            alt: 'Grünlicher Grabstein mit wellenförmiger Kieseleinlage',
            title: 'Grünlicher Naturstein-Grabstein mit geschwungener Kieseleinlage am oberen Rand',
          },
          {
            src: 'tombstone-stock-red-arched-lines.jpg',
            alt: 'Roter Grabstein mit geschwungenem Linienmuster',
            title: 'Roter Naturstein-Grabstein mit feinen, gebogenen Linienornamenten im oberen Bereich',
          },

        ],
        grabmalreferenzen: [
          {
            src: 'tombstone-references-hamberger-kilimanjaro.jpg',
            alt: 'Zweiteiliger Grabstein mit Berggravur',
            title: 'Moderner Grabstein der Familie Hamberger, zweiteilig aus grauem und schwarzem Stein, mit Gravur eines Bergpanoramas und bepflanzter Grabeinfassung.',
          },
          {
            src: 'tombstone-references-dark-light-diamond.jpg',
            alt: 'Zweiteiliges Grabmal mit Rautenornament',
            title: 'Grabmal aus zwei kontrastierenden Steinen mit eingelassener Raute im dunklen Teil',
          },
          {
            src: 'tombstone-references-faceted-dark.jpg',
            alt: 'Grabmal mit facettierter Oberfläche',
            title: 'Modernes dunkles Grabmal mit geometrisch facettierter Oberfläche',
          },
          {
            src: 'tombstone-references-floral-engraving-dark.jpg',
            alt: 'Dunkles Grabmal mit floralem Ornament',
            title: 'Dunkler Naturstein mit geschwungenem Schnitt und eingravierten Blumenmotiven',
          },
          {
            src: 'tombstone-references-dark-light-cross-split.jpg',
            alt: 'Zweiteiliges Grabmal aus dunklem und hellem Granit mit Kreuz',
            title: 'Zweiteiliges modernes Grabmal in dunklem und hellem Granit mit eingelassenem Kreuzornament',
          },
          {
            src: 'tombstone-references-sun-relief-double.jpg',
            alt: 'Zweiteiliges Grabmal mit Sonnenrelief',
            title: 'Zweiteiliges Grabmal aus hellem und dunklem Stein mit großem Sonnenrelief und Pflanzenornamenten',
          },
          {
            src: 'tombstone-references-book-praying-hands.jpg',
            alt: 'Grabmal in Buchform mit betenden Händen',
            title: 'Graues Grabmal in offener Buchform mit bronzenen betenden Händen und Inschrift',
          },
          {
            src: 'tombstone-references-flower-moon-shape.jpg',
            alt: 'Grabmal in Blütenform mit Mondsichel',
            title: 'Rundes Grabmal in Blütenform aus grauem Naturstein mit eingearbeiteter Mondsichel',
          },
          {
            src: 'tombstone-references-light-cross-relief.jpg',
            alt: 'Helles Grabmal mit Kreuzrelief',
            title: 'Aufrecht stehendes helles Grabmal mit plastischem Kreuzrelief und runder Einfassung',
          },
          {
            src: 'tombstone-references-light-pebbles-side.jpg',
            alt: 'Helles Grabmal mit Kieseleinlage seitlich',
            title: 'Helles Grabmal mit seitlicher Kieseleinlage und modernem Aufbau',
          },
          {
            src: 'tombstone-references-light-rounded-tree.jpg',
            alt: 'Helles Grabmal mit abgerundetem Kopfteil',
            title: 'Schlichtes helles Grabmal mit abgerundetem Kopfteil und bepflanzter Grabeinfassung',
          },
          {
            src: 'tombstone-references-double-light-cross.jpg',
            alt: 'Helles Doppelgrabmal mit Kreuzausschnitt',
            title: 'Zweiteiliges helles Grabmal mit mittigem Kreuzausschnitt und bepflanzter Grabeinfassung',
          },
          {
            src: 'tombstone-references-rounded-gray.jpg',
            alt: 'Abgerundetes graues Grabmal',
            title: 'Schlichtes graues Grabmal mit abgerundetem Kopfteil und polierter Oberfläche',
          },
          {
            src: 'tombstone-references-light-double-cross.jpg',
            alt: 'Helles Doppelgrabmal mit Kreuzornament',
            title: 'Zweiteiliges helles Grabmal mit Kreuz und Ährenmotiv, bepflanzte Grabeinfassung',
          },
          {
            src: 'tombstone-references-red-curved-polished.jpg',
            alt: 'Rot-graues Grabmal mit geschwungener Form',
            title: 'Grabmal aus rot-grauem Naturstein mit polierter Front und gebogener Form',
          },
          {
            src: 'tombstone-references-double-curved.jpg',
            alt: 'Zweiteiliges Grabmal mit gebogenen Steinen',
            title: 'Zweiteiliges Grabmal aus dunkelgrauem Stein mit geschwungenen Formen',
          },
          {
            src: 'tombstone-references-bird-branch.jpg',
            alt: 'Grabmal mit Vogel und Blattornament',
            title: 'Dunkler Stein mit plastischem Vogel auf Ast und Blattornament, bepflanzte Grabeinfassung',
          },
          {
            src: 'tombstone-references-cross-dark-light.jpg',
            alt: 'Grabmal mit Kreuz und zweifarbigem Stein',
            title: 'Grabmal mit modernem Kreuzornament, Kombination aus hellem und dunklem Naturstein',
          },
          {
            src: 'tombstone-references-lighthouse.jpg',
            alt: 'Grabmal mit Leuchtturm-Relief',
            title: 'Zweiteiliges Grabmal mit Leuchtturm-Relief im hellen Stein und dunklem Inschriftenstein daneben',
          },
          {
            src: 'tombstone-references-light-dark-combination.jpg',
            alt: 'Grabmal aus hellem Stein mit dunklem Akzent',
            title: 'Modernes Grabmal mit hellem Steinblock und dunklem Querbalken für die Inschrift',
          },
          {
            src: 'tombstone-references-tree-natural.jpg',
            alt: 'Grabmal aus hellem Naturstein mit Baumstamm',
            title: 'Grabmal aus hellem Naturstein mit integriertem Baumstamm und bepflanzter Grabeinfassung',
          },
          {
            src: 'tombstone-references-natural-boulder.jpg',
            alt: 'Grüner Findling als Grabstein',
            title: 'Unregelmäßiger grüner Stein mit Inschrift und Bodendeckerpflanzen',
          },
          {
            src: 'tombstone-references-symbolic-steps.jpg',
            alt: 'Speckiger Grabstein mit Stufensymbol',
            title: 'Speckgranitgrabstein mit goldener Stufen-Silhouette und Namensgravur',
          },
          {
            src: 'tombstone-references-triple-dark.jpg',
            alt: 'Dreiteiliger Grabstein mit goldener Schrift',
            title: 'Dunkler Dreiteiler mit goldenen Namen und Lavendelbepflanzung',
          },
          {
            src: 'tombstone-references-dry-arrangement.jpg',
            alt: 'Heller Grabstein mit Trockenarrangement',
            title: 'Hellbeiger Grabstein mit Trockenblumen, Wurzelholz und Sukkulenten',
          },
          {
            src: 'tombstone-references-contrasting-colors.jpg',
            alt: 'Beiger und schwarzer Grabstein mit Kerze',
            title: 'Zweifarbiger Grabstein mit integriertem Laternenfach und bunten Pflanzen',
          },
          {
            src: 'tombstone-references-oval-pink.jpg',
            alt: 'Ovaler rosa Grabstein mit Kreuz',
            title: 'Ovaler rosafarbener Grabstein mit eingraviertem Kreuz und bepflanztem Blumenbeet',
          },
          {
            src: 'tombstone-references-rectangular-opening.jpg',
            alt: 'Moderner Grabstein mit rechteckiger Aussparung',
            title: 'Geradliniger heller Grabstein mit rechteckiger Aussparung, Laterne und umlaufendem Rahmen',
          },
          {
            src: 'tombstone-references-organic-shape.jpg',
            alt: 'Weißer Ovalgrabstein mit Reliefformen',
            title: 'Organisch geformter weißer Grabstein mit Blattelementen und Heidepflanzen',
          },
          {
            src: 'tombstone-references-light-gravestone-groundcover.jpg',
            alt: 'Hellgrauer Grabstein mit Bodendeckerpflanzen',
            title: 'Grauer Grabstein umgeben von weiß blühenden Bodendeckern und Laterne',
          },
          {
            src: 'tombstone-references-split-stone-lantern.jpg',
            alt: 'Zweifarbiger Grabstein mit Kiesbett und Laterne',
            title: 'Split-Design-Grabstein aus hellem und dunklem Granit, umgeben von schwarzem Kies und Laterne',
          },
          {
            src: 'tombstone-references-stairs-motif.jpg',
            alt: 'Heller Grabstein mit Treppen-Motiv',
            title: 'Hellgrauer Grabstein mit Stufenornament, Messingfigur und weißen Blumen',
          },
          {
            src: 'tombstone-references-split-dark-light.jpg',
            alt: 'Zweifarbiger Grabstein mit Datumsgravur',
            title: 'Hell- und dunkelgrauer Grabstein mit Geburts- und Sterbedatum',
          },
        ],
        restaurierungen: [
          {
            src: 'restorations-historic-facade.jpg',
            alt: 'Gesamtansicht Fassade',
            title: 'Dreistöckiges historisches Sandsteinhaus mit Stufengiebel, Rundbogenportal und mehrteiligen Fenstern.',
          },
          {
            src: 'restorations-gothic-arch-windows.jpg',
            alt: 'Spitzbogenfenster',
            title: 'Paar gotischer Spitzbogenfenster in gelb-ockerfarbener Backsteinwand mit geschlossenen Klappläden.',
          },
          {
            src: 'restorations-facade-detail-gable.jpg',
            alt: 'Oberer Fassadendetail',
            title: 'Zwei offene Fenster mit breiter Steinfassung und rundem Wappenornament im Gesims.',
          },
          {
            src: 'restorations-column-base.jpg',
            alt: 'Säulenfuß',
            title: 'Frisch gearbeitete Rundsäule auf quadratischem Plinth aus hellem Sandstein am Sockel.',
          },
          {
            src: 'restorations-window-sill.jpg',
            alt: 'Fensterlaibung unten',
            title: 'Unterer Steinsims einer Laibung mit temporärem Holzverschluss und Putzresten.',
          },
          {
            src: 'restorations-sandstone-block.jpg',
            alt: 'Sandsteinecke im Bau',
            title: 'Neu zugeschnittener Sandsteinblock als Wandaufsatz, daneben Holzverschalung und Baukette.',
          },
          {
            src: 'restorations-steel-frame-window.jpg',
            alt: 'Metallfenster',
            title: 'Rechteckiges Stahlprofilfenster mit neuer Verglasung, eingebettet in raues Natursteinmauerwerk.',
          },
          {
            src: 'restorations-historic-door-entrance.jpg',
            alt: 'Historische Holztür mit Sandsteinrahmung',
            title: 'Dunkle Doppelflügeltür aus Holz mit dekorativem Sandsteinportal und schmiedeeisernem Geländer.',
          },
          {
            src: 'restorations-historic-door-detail.jpg',
            alt: 'Detailaufnahme Holztür',
            title: 'Nahaufnahme der geschnitzten Holztür mit Zierbeschlägen und schwarzem Türklopfer.',
          },
          {
            src: 'restorations-stone-statue-jesus-cross.jpg',
            alt: 'Sandsteinfigur mit Kreuz',
            title: 'Restaurierte Sandsteinfigur Jesu mit Kreuz, Sockelinschrift von 1883 und Erneuerung 1981.',
          },
        ],
      },
    },
  },

  ui: {
    colors: {
      primary: 'red',
      neutral: 'zinc',
    },
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
    contentToc: {
      slots: {
        root: 'lg:backdrop-blur-none',
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
