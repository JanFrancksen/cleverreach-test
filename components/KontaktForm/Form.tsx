import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@ui/Button';
import Heading from '@ui/typography/Heading';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas';
import {
  FormValues,
  InputCheckbox,
  InputHeading,
  InputText,
  InputTextarea,
  schema,
} from './Index';

const FormTest = () => {
  const router = useRouter();

  const formMethods = useForm<FormValues>({
    resolver: zodResolver(schema),
    shouldUseNativeValidation: true,
  });

  const canvasRef = useRef<SignatureCanvas | null>(null);

  const clearCanvas = () => {
    if (canvasRef.current) {
      canvasRef.current.clear();
    }
  };

  const onSubmit = (data: FormValues) => {
    const signatureData = canvasRef.current?.toDataURL('image/png');
    router.push({
      pathname: '/av-vertrag',
      query: { ...data, signatureData },
    });
  };

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={formMethods.handleSubmit(onSubmit)}
        className="flex flex-col">
        <div className="mb-8 flex flex-col gap-2 rounded bg-white p-4 shadow-md">
          <Heading
            title="Vertrag zur Auftrags&shy;verarbeitung"
            size="3xl"
            tag="h2"
          />
          <p>
            Gemäß Art. 28 Datenschutz-Grundverordnung (DSGVO) liegt eine
            Auftragsverarbeitung vor, wenn Sie unser System verwenden. Die
            Verarbeitung durch einen Auftragsverarbeiter erfolgt auf der
            grundlage eines Auftragverarbeitungsvertrages (AV-Vertrag). Diesen
            Vertrag können Sie über den folgenden Button online mit uns
            abschließen.
          </p>
          <a
            href="/AV_Vertrag.pdf"
            download="AV_Vertrag.pdf"
            className="inline-block w-full rounded-md bg-orange-400 p-4 text-left transition-transform hover:scale-[101%]">
            Zudem können Sie den Mustervertrag hier als PDF downloaden
          </a>
          <InputTextarea
            label="verarbeitungsGegenstand"
            title="Gegenstand der Verarbeitung"
            subtitle="(bitte ergänzen, falls notwendig)"
            defaultValue="Bereitstellung der CleverReach-Software für den E-Mail-Versand/- Auswertung durch die Auftraggeberin."
          />
          <InputTextarea
            label="verarbeitungsArtUndZweck"
            title="Art und Zweck der Verarbeitung"
            subtitle="(bitte ergänzen, falls notwendig)"
            defaultValue="Erhebung, Speicherung, Nutzung und Übermittlung von Account-Daten der Auftraggeberin. Speicherung und Übermittlung von Empfängerdaten zum Zweck der Zusendung/Auswertung von E-Mails."
          />
          <InputCheckbox
            title="Art der personenbezogenen Daten"
            checkboxes={[
              { name: 'Personenstammdaten', label: 'personenstammdaten' },
              { name: 'Kommunikationsdaten', label: 'kommunikationsdaten' },
              { name: 'Vertragsstammdaten', label: 'vertragsstammdaten' },
              { name: 'Protokolldaten', label: 'protokolldaten' },
              { name: 'Sonstige Daten', label: 'sonstigeDaten' },
            ]}
          />

          <InputCheckbox
            title="Kategorien betroffener Personen"
            checkboxes={[
              {
                name: 'Kunden und Interessierte des Auftraggebers',
                label: 'kundenUndInteressierte',
              },
              {
                name: 'Mitarbeiter und Lieferanten des Auftraggebers',
                label: 'mitarbeiterUndLieferanten',
              },
              { name: 'Sonstiges', label: 'sonstigeBetroffene' },
            ]}
          />

          <InputText
            title="Name und Kontaktdaten Ihres Datenschutzbeauftragten"
            subtitle="(sofern vorhanden)"
            textboxes={[
              { name: 'firstName', label: 'Vorname', type: 'text' },
              { name: 'lastName', label: 'Nachname', type: 'text' },
              { name: 'funktion', label: 'Funktion', type: 'text' },
            ]}
          />

          <InputText
            title="Digital unterschreiben"
            textboxes={[
              { name: 'ort', label: 'Ort', type: 'text' },
              {
                name: 'datum',
                label: 'Datum',
                type: 'date',
                defaultValue: `${new Date().toISOString().slice(0, 10)}`,
              },
            ]}
          />
          <InputHeading
            title="Ihre Unterschrift"
            subtitle="(per Maus oder Touch)"
          />

          <div className="h-[200px] max-w-[500px] overflow-hidden rounded border border-gray-400 bg-gray-200">
            <SignatureCanvas
              minDistance={5}
              canvasProps={{ className: 'w-full h-full' }}
              ref={canvasRef}
            />
          </div>
          {canvasRef.current?.isEmpty() && (
            <p>Bitte unterschreiben Sie den Vertrag.</p>
          )}

          <div>
            <Button onClick={clearCanvas}>zurücksetzen</Button>
          </div>
        </div>

        <Button isSubmit additionalStyles="self-end">
          Jetzt AV erstellen
        </Button>
      </form>
    </FormProvider>
  );
};

export default FormTest;
