<template>
  <div>
    <div class="document page">
      <div class="mt-8">
        <router-link to="/ueber-uns">
          <h1>Über uns</h1>
        </router-link>
      </div>
      <div class="content-wrapper">
        <TextImage class="mt-4" side="right">
          <TitledImage image="about_1.jpg" alt="Betriebsgelände Bernd Siegel">Betriebsgelände Bernd Siegel</TitledImage>
          <span class="text">
            <p>Sie finden unsere Firma Bernd Siegel Steingestaltung in Neudenau. Nach mehr als 15 Jahren bieten wir Ihnen viel Erfahrung, Fachwissen und Freude an der Kreativität bei der Gestaltung und Bearbeitung des Naturstoffes Stein.</p>
            <p>Bernd Siegel ist als Firmengründer staatlich geprüfter Steintechniker und Meister seines Fachs. Als Steinmetzmeister und Steinbildhauermeister hat er sich auf die Restauration von Sandsteinfassaden und Gestaltung von Grabmalen spezialisiert.</p>
            <p>Wir sind ein dreiköpfiges, gut ausgebildetes Team. Als Meisterbetrieb arbeiten wir auf dem neuesten Stand der Technik und beherrschen zudem die traditionellen Arbeitsmethoden des Steinmetzhandwerks. Die Schonung unserer wertvollen Umwelt und unserer Ressourcen ist uns wichtig. Bei uns erhalten Sie zuverlässige Arbeit aus Meisterhand.</p>
            <p>Wir als erfahrener und fachkompetenter Steinmetzbetrieb haben einen umfassenden Service rund um den langlebigen und wandelbaren Naturstoff Stein: die fachmännische Pflege und Restauration von Gebäuden, Sandsteinfassaden, Fenstern, Treppen, Geländern, Ornamenten, Denkmälern und Grabsteinen.</p>
            <p>Des Weiteren bieten wir eine individuelle Grabmalgestaltung und Grabinschriften nach Ihren Wünschen.</p>
            <p>Wir reinigen Außenfassaden von Gebäuden im Niederdruckstrahlverfahren, vergleichbar dem JOS- oder Nebelstrahlverfahren. In unserem Angebot finden Sie Fensterbänke und Skulpturen aus Stein als auch Natursteinsanierung.</p>
          </span>
        </TextImage>
      </div>
      <div class="content-wrapper">
        <TextImage class="mt-4" side="left">
          <TitledImage image="about_2.jpg" alt="Ausstellungsfläche">Ausstellungsfläche</TitledImage>
          <span class="text">
            <p>Auf unserer Ausstellungsfläche bieten wir Grabmale in vielfältiger Art und Form aus eigener Produktion oder zugekauft. Wir beziehen unter anderem Grabmale der Firma Gräf Granit GmbH aus dem Fichtelgebirge.</p>
            <p>Auf Wunsch verwenden wir auch Steine aus Deutschland. Unser Angebot wird vervollständigt durch Grabzubehör. Wir nehmen auch Grababräumungen vor und lagern die Grabanlagen für sie bei uns ein.</p>
            <p>Wir sind von Montag bis Samstag von 07:00 Uhr bis 20:00 Uhr nach Vereinbarung für Sie da. Vor unserem Firmengebäude finden Sie ausreichend Parkplätze zu Ihrer Verfügung.</p>
            <p>
              Überzeugen Sie sich von unserem umfassenden Angebot, vereinbaren Sie einen persönlichen und unverbindlichen Beratungstermin oder wenden Sie sich über unser
              <router-link to="/kontakt" class="link-in">Kontaktformular</router-link> an uns. Wir melden uns umgehend bei Ihnen und beraten Sie auch gerne bei Ihnen zu Hause.
            </p>
          </span>
        </TextImage>
      </div>
    </div>
  </div>
</template>

<style scoped>
a {
  color: #770019;
  font-weight: 500;
}

.text {
  text-align: justify;
}
</style>
