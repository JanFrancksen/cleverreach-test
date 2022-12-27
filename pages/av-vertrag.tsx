import { GetServerSideProps } from 'next';
import Image from 'next/image';
import Button from '../components/Button';
import Container from '../components/Container';
import Heading from '../components/Typography/Heading';

export const getServerSideProps: GetServerSideProps = async context => {
  const formData = context.query;

  console.log(formData);

  return {
    props: {
      formData,
    },
  };
};

type FormValues = {
  formData: {
    verarbeitungsGegenstand: string;
    verarbeitungsArtUndZweck: string;
    personenstammdaten: boolean;
    kommunikationsdaten: boolean;
    vertragsstammdaten: boolean;
    protokolldaten: boolean;
    sonstigeDaten: boolean;
    kundenUndInteressierte: boolean;
    mitarbeiterUndLieferanten: boolean;
    sonstigeBetroffene: boolean;
    firstName: string;
    lastName: string;
    funktion: string;
    ort: string;
    datum: string;
    signatureData: string;
  };
};

const Avvertrag = ({ formData }: FormValues) => {
  console.log(formData.vertragsstammdaten);

  return (
    <main className="Content">
      <div className="ContentContainer mx-auto my-20 print:my-0">
        <Container>
          <Heading
            title="Vertrag zur Auftragsverarbeitung"
            size="3xl"
            tag="h1"
          />
          <p className="mb-6">
            Gemäß Art. 28 Datenschutz-Grundverordnung (DSGVO) liegt eine
            Auftragsverarbeitung vor, wenn Sie unser System verwenden. Die
            Verarbeitung durch einen Auftragsverarbeiter erfolgt auf der
            grundlage eines Auftragverarbeitungsvertrages (AV-Vertrag).
          </p>
          <Heading
            title="Gegenstand der Verarbeitung"
            size="xl"
            tag="h2"
            bold
          />
          <p className="mb-6">{formData?.verarbeitungsGegenstand}</p>

          <Heading
            title="Art und Zweck der Verarbeitung"
            size="xl"
            tag="h2"
            bold
          />
          <p className="mb-6">{formData?.verarbeitungsArtUndZweck}</p>

          <Heading
            title="Art der personenbezogenen Daten"
            size="xl"
            tag="h2"
            bold
          />
          <ul className="mb-6 list-disc">
            {formData.personenstammdaten.toString().toLowerCase() ===
              'true' && <li className="ml-8">Personenstammdaten</li>}

            {formData.kommunikationsdaten.toString().toLowerCase() ===
              'true' && <li className="ml-8">Kommunikationsdaten</li>}
            {formData.vertragsstammdaten.toString().toLowerCase() ===
              'true' && <li className="ml-8">Vertragsstammdaten</li>}
            {formData.protokolldaten.toString().toLowerCase() === 'true' && (
              <li className="ml-8">Protokolldaten</li>
            )}
            {formData.sonstigeDaten.toString().toLowerCase() === 'true' && (
              <li className="ml-8">sonstige Daten</li>
            )}
          </ul>

          <Heading
            title="Kategorien betroffener Personen"
            size="xl"
            tag="h2"
            bold
          />
          <ul className="mb-6 list-disc">
            {formData.kundenUndInteressierte.toString().toLowerCase() ===
              'true' && (
              <li className="ml-8">
                Kunden und Interessenten des Auftraggebers
              </li>
            )}

            {formData.mitarbeiterUndLieferanten.toString().toLowerCase() ===
              'true' && (
              <li className="ml-8">
                Mitarbeiter und Lieferanten des Auftraggebers
              </li>
            )}
            {formData.sonstigeBetroffene.toString().toLowerCase() ===
              'true' && <li className="ml-8">Sonstiges</li>}
          </ul>
          <Heading
            title="Name und Kontaktdaten ihres Datenschutzbeauftragten"
            size="xl"
            tag="h2"
            bold
          />
          <div className="mb-6 grid grid-cols-2">
            <p>Vorname: {formData?.firstName}</p>
            <p>Nachname: {formData?.lastName}</p>
            <p>Funktion: {formData?.funktion}</p>
          </div>

          <Heading title="Unterschrift" size="xl" tag="h2" bold />
          <Image
            src={formData?.signatureData}
            alt="Unterschrift"
            width={200}
            height={100}
          />
          <div className="flex gap-4">
            <p>Ort: {formData?.ort}</p>
            <p>Datum: {formData?.datum}</p>
          </div>

          <div className="mb-6 flex gap-2 print:hidden">
            <Button href="/">zurück zum Formular</Button>
            <Button onClick={() => window.print()}>drucken</Button>
          </div>
        </Container>
      </div>
    </main>
  );
};

export default Avvertrag;
