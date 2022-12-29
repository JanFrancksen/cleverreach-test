import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/router';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import SignatureCanvas from 'react-signature-canvas';
import Button from '../Button';
import Heading from '../Typography/Heading';
import { FormValues, schema } from './FormSchema';

const FormTest = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
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
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
      <div className="mb-8 flex flex-col gap-2 rounded bg-white p-4 shadow-md">
        <Heading title="Vertrag zur Auftragsverarbeitung" size="3xl" tag="h2" />
        <p>
          Gemäß Art. 28 Datenschutz-Grundverordnung (DSGVO) liegt eine
          Auftragsverarbeitung vor, wenn Sie unser System verwenden. Die
          Verarbeitung durch einen Auftragsverarbeiter erfolgt auf der grundlage
          eines Auftragverarbeitungsvertrages (AV-Vertrag). Diesen Vertrag
          können Sie über den folgenden Button online mit uns abschließen.
        </p>
        <a
          href="/AV_Vertrag.pdf"
          download="AV_Vertrag.pdf"
          className="inline-block w-full rounded-md bg-orange-400 p-4 text-left transition-transform hover:scale-[101%]">
          Zudem können Sie den Mustervertrag hier als PDF downloaden
        </a>
        <label htmlFor="verarbeitungsGegenstand" className="formLabel">
          <div className="formLabelWrap">
            <Heading
              size="lg"
              tag="h3"
              title="Gegenstand der Verarbeitung"
              bold
            />
            <span className="formLabelSpan">
              &nbsp;(bitte ergänzen, falls notwendig)
            </span>
          </div>
          <textarea
            {...register('verarbeitungsGegenstand')}
            defaultValue="Bereitstellung der CleverReach-Software für den E-Mail-Versand/- Auswertung durch die Auftraggeberin."
            className="inputText"
            rows={4}
          />
          {errors.verarbeitungsGegenstand && (
            <p>{errors.verarbeitungsGegenstand?.message}</p>
          )}
        </label>
        <label htmlFor="verarbeitungsArtUndZweck" className="formLabel">
          <div className="formLabelWrap">
            <Heading
              size="lg"
              tag="h3"
              title="Art und Zweck der Verarbeitung"
              bold
            />
            <span className="formLabelSpan">
              &nbsp;(bitte ergänzen, falls notwendig)
            </span>
          </div>
          <textarea
            {...register('verarbeitungsArtUndZweck')}
            defaultValue="Erhebung, Speicherung, Nutzung und Übermittlung von Account-Daten der Auftraggeberin. Speicherung und Übermittlung von Empfängerdaten zum Zweck der Zusendung/Auswertung von E-Mails."
            className="inputText"
            rows={4}
          />
          {errors.verarbeitungsArtUndZweck && (
            <p>{errors.verarbeitungsArtUndZweck?.message}</p>
          )}
        </label>
        <div className="formLabelWrap">
          <Heading
            size="lg"
            tag="h3"
            title="Art der personenbezogenen Daten"
            bold
          />
        </div>
        <label htmlFor="personenstammdaten" className="checkboxWrap">
          <input
            type="checkbox"
            {...register('personenstammdaten')}
            className="inputCheckbox"
          />
          Personenstammdaten
          {errors.personenstammdaten && (
            <p>{errors.personenstammdaten?.message}</p>
          )}
        </label>
        <label htmlFor="kommunikationsdaten" className="checkboxWrap">
          <input
            type="checkbox"
            defaultChecked
            {...register('kommunikationsdaten')}
            className="inputCheckbox"
          />
          Kommunikationsdaten
          {errors.kommunikationsdaten && (
            <p>{errors.kommunikationsdaten?.message}</p>
          )}
        </label>

        <label htmlFor="vertragsstammdaten" className="checkboxWrap">
          <input
            type="checkbox"
            defaultChecked
            {...register('vertragsstammdaten')}
            className="inputCheckbox"
          />
          Vertragsstammdaten
          {errors.vertragsstammdaten && (
            <p>{errors.vertragsstammdaten?.message}</p>
          )}
        </label>

        <label htmlFor="protokolldaten" className="checkboxWrap">
          <input
            type="checkbox"
            {...register('protokolldaten')}
            className="inputCheckbox"
          />
          Protokolldaten
          {errors.protokolldaten && <p>{errors.protokolldaten?.message}</p>}
        </label>

        <label htmlFor="sonstigeDaten" className="checkboxWrap">
          <input
            type="checkbox"
            {...register('sonstigeDaten')}
            className="inputCheckbox"
          />
          Sonstige Daten
          {errors.sonstigeDaten && <p>{errors.sonstigeDaten?.message}</p>}
        </label>
        <div className="formLabelWrap">
          <Heading
            size="lg"
            tag="h3"
            title="Kategorien betroffener Personen"
            bold
          />
        </div>
        <label htmlFor="kundenUndInteressierte" className="checkboxWrap">
          <input
            type="checkbox"
            {...register('kundenUndInteressierte')}
            className="inputCheckbox"
          />
          Kunden und Interessierte des Auftraggebers
          {errors.kundenUndInteressierte && (
            <p>{errors.kundenUndInteressierte?.message}</p>
          )}
        </label>

        <label htmlFor="mitarbeiterUndLieferanten" className="checkboxWrap">
          <input
            type="checkbox"
            {...register('mitarbeiterUndLieferanten')}
            className="inputCheckbox"
          />
          Mitarbeiter und Lieferanten des Auftraggebers
          {errors.mitarbeiterUndLieferanten && (
            <p>{errors.mitarbeiterUndLieferanten?.message}</p>
          )}
        </label>

        <label htmlFor="sonstigeBetroffene" className="checkboxWrap">
          <input
            type="checkbox"
            {...register('sonstigeBetroffene')}
            className="inputCheckbox"
          />
          Sonstiges
          {errors.sonstigeBetroffene && (
            <p>{errors.sonstigeBetroffene?.message}</p>
          )}
        </label>

        <div className="grid gap-x-4 md:grid-cols-2">
          <div className="formLabelWrap md:col-span-2">
            <Heading
              size="lg"
              tag="h3"
              title="Name und Kontaktdaten ihres Datenschutzbeauftragten"
              bold
            />
            <span className="formLabelSpan">
              &nbsp;(bitte ergänzen, falls notwendig)
            </span>
          </div>
          <label htmlFor="firstName" className="formLabel">
            Vorname
            <input
              type="text"
              {...register('firstName')}
              className="inputText"
            />
            {errors.firstName && <p>{errors.firstName?.message}</p>}
          </label>

          <label htmlFor="lastName" className="formLabel">
            Nachname
            <input
              type="text"
              {...register('lastName')}
              className="inputText"
            />
            {errors.lastName && <p>{errors.lastName?.message}</p>}
          </label>

          <label htmlFor="funktion" className="formLabel">
            Funktion
            <input
              type="text"
              {...register('funktion')}
              className="inputText"
            />
            {errors.funktion && <p>{errors.funktion?.message}</p>}
          </label>
        </div>
        <div className="grid gap-x-4 md:grid-cols-2">
          <div className="formLabelWrap flex items-baseline md:col-span-2">
            <Heading title="Digital unterschreiben" size="lg" tag="h3" bold />
            <span className="formLabelSpan">
              &nbsp;(bitte ergänzen, falls notwendig)
            </span>
          </div>

          <label htmlFor="ort" className="formLabel">
            Ort
            <input type="text" {...register('ort')} className="inputText" />
            {errors.ort && <p>{errors.ort?.message}</p>}
          </label>

          <label htmlFor="datum" className="formLabel">
            Datum
            <input
              type="date"
              defaultValue={new Date().toISOString().substr(0, 10)}
              {...register('datum')}
              className="inputText"
            />
            {errors.datum && <p>{errors.datum?.message}</p>}
          </label>
        </div>

        <div className="formLabelWrap">
          <Heading size="lg" tag="h3" title="Ihre Unterschrift" bold />
          <span className="formLabelSpan">&nbsp;(per Maus oder Touch)</span>
        </div>

        <div className="h-[200px] max-w-[400px] overflow-hidden rounded border border-gray-400 bg-gray-200">
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

      <input
        type="submit"
        value="Jetzt AV erstellen"
        className="cursor-pointer self-end rounded bg-orange-400 py-2 px-4 text-white hover:bg-orange-500"
      />
    </form>
  );
};

export default FormTest;
