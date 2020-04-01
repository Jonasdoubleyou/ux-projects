import * as React from "react";
import { Logo } from "./Logo";
import { Link } from "react-router-dom";

export const About = () => (
    <div>

        <h4>Anleitung für die, die Hilfe benötigen</h4>

        <ul>
            <li>
                Drücke auf den Hilfe Button,
                wenn du Hilfe benötigst(Wenn du helfen möchtest siehe unten).
                Du wirst dann sofort auf den Anmeldescreen weitergeleitet,
                gib dort deine Daten ein und drücke anschließend auf weiter.
            </li>
            <li>
                Nun kannst du eine neue Bestellung aufgeben,
                drücke dafür den Button „neue Bestellung aufgeben“.
                Gib deine gewünschten Lebensmittel ein und drücke anschließend aufsuchen.
                Neben der Eingabe gibt es einen Filterbutton. Betätige diesen,
                wenn du nach einer bestimmten Gruppe suchen möchtest
                oder drücke auf den Plusbutton um die Lebensmittel hinzuzufügen.
                Bei der Funktion Kommentare kannst du noch einen zusätzlichen Kommentar,
                wie z. B. den Fettanteil von Milch, hinzufügen.
            </li>
            <li>
                Wenn du alle deine Lebensmittel eingegeben hast,
                drücke auf weiter. Nun siehst du eine Übersicht deiner Bestellung,
                wenn du nichts mehr hinzuzufügen hast, klicke auf bestätigen.
            </li>
            <li>
                Nun kannst du deinen aktuellen Bestellstaus sehen.
                Du kannst die Bestellung nur so lange löschen,
                solange der aktuelle Bestellstatus unbearbeitet ist.
            </li>
            <li>
                Sobald deine Bestellung eingekauft wurde,
                bekommst du ein Bild des Kassenzettels.
                Bitte halte das Geld möglichst passend bereit.
            </li>
        </ul>


        <h4>Anleitung für Helfer:</h4>

        <ul>
            <li>
                Drücke auf den helfen Button.
                Du wirst dann sofort auf den Anmeldescreen weitergeleitet,
                gib dort deine Daten ein und drücke anschließend auf weiter.
            </li>
            <li>
                Dir wird nun eine Karte angezeigt, auf dieser kannst du sehen,
                wo Personen sind, denen du helfen kannst. Wähle eine Person deiner Wahl aus.
                Anschließend siehst du den gewünschten Einkaufszettel der Person nach Kategorien sortiert.
                Achte auf persönliche Kommentare, die hinzugefügt wurden.
                Solltest du Fragen zum Einkaufszettel haben, kannst die Person auch gerne anrufen.
            </li>
            <li>
                Sobald du den Kassenzettel erhalten hast und fotografiere ihn ab.
                Zum Schluss siehst du nochmal die Adresse und kannst den Einkauf abliefern.
            </li>
            <li>
                Bleib gesund!
            </li>
        </ul>
        <Link to="/"><h4>Zurück</h4></Link>
    </div>

);