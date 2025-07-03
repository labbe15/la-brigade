export default function Legal() {
  return (
    <div className="min-h-screen bg-black pt-20">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Mentions Légales</h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Informations légales</h2>
            <div className="text-gray-300 space-y-2">
              <p><strong>Dénomination :</strong> La Brigade</p>
              <p><strong>Forme juridique :</strong> Association loi 1901</p>
              <p><strong>Siège social :</strong> 123 Rue de la Musique, 75000 Paris, France</p>
              <p><strong>Email :</strong> contact@labrigade.fr</p>
              <p><strong>Téléphone :</strong> +33 1 23 45 67 89</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Hébergement</h2>
            <div className="text-gray-300">
              <p>Ce site est hébergé par :</p>
              <p><strong>Netlify, Inc.</strong></p>
              <p>44 Montgomery Street, Suite 300</p>
              <p>San Francisco, CA 94104, États-Unis</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Propriété intellectuelle</h2>
            <p className="text-gray-300">
              L'ensemble de ce site relève de la législation française et internationale 
              sur le droit d'auteur et la propriété intellectuelle. Tous les droits de 
              reproduction sont réservés, y compris pour les documents téléchargeables 
              et les représentations iconographiques et photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Protection des données personnelles</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Conformément au Règlement Général sur la Protection des Données (RGPD) 
                et à la loi « Informatique et Libertés », vous disposez d'un droit d'accès, 
                de rectification, de suppression et de portabilité de vos données personnelles.
              </p>
              
              <h3 className="text-lg font-semibold text-white">Collecte des données</h3>
              <p>
                Nous collectons uniquement les données nécessaires au fonctionnement du site 
                et à la communication avec nos utilisateurs :
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nom et prénom (formulaire de contact)</li>
                <li>Adresse email (formulaire de contact et newsletter)</li>
                <li>Message (formulaire de contact)</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white">Utilisation des données</h3>
              <p>Vos données sont utilisées pour :</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Répondre à vos demandes de contact</li>
                <li>Vous envoyer notre newsletter (avec votre consentement)</li>
                <li>Améliorer nos services</li>
              </ul>
              
              <h3 className="text-lg font-semibold text-white">Conservation des données</h3>
              <p>
                Vos données sont conservées pendant une durée n'excédant pas celle 
                nécessaire aux finalités pour lesquelles elles sont collectées et traitées.
              </p>
              
              <h3 className="text-lg font-semibold text-white">Vos droits</h3>
              <p>
                Pour exercer vos droits ou pour toute question relative au traitement 
                de vos données personnelles, vous pouvez nous contacter à l'adresse : 
                <a href="mailto:contact@labrigade.fr" className="text-cyan-500 hover:underline">
                  contact@labrigade.fr
                </a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
            <div className="text-gray-300 space-y-4">
              <p>
                Ce site utilise des cookies techniques nécessaires au bon fonctionnement 
                du site. Aucun cookie de tracking ou publicitaire n'est utilisé sans 
                votre consentement explicite.
              </p>
              
              <h3 className="text-lg font-semibold text-white">Types de cookies utilisés</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li><strong>Cookies techniques :</strong> nécessaires au fonctionnement du site</li>
                <li><strong>Cookies de préférences :</strong> pour mémoriser vos choix (thème, langue)</li>
              </ul>
              
              <p>
                Vous pouvez à tout moment désactiver les cookies dans les paramètres 
                de votre navigateur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Responsabilité</h2>
            <p className="text-gray-300">
              Les informations contenues sur ce site sont aussi précises que possible. 
              Toutefois, l'association La Brigade ne peut être tenue responsable des 
              omissions, inexactitudes et carences dans la mise à jour, qu'elles soient 
              de son fait ou du fait des tiers partenaires qui lui fournissent ces informations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">Droit applicable</h2>
            <p className="text-gray-300">
              Les présentes mentions légales sont soumises au droit français. 
              En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>
        </div>
        
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-gray-400">
          <p>Dernière mise à jour : Janvier 2025</p>
        </div>
      </div>
    </div>
  );
}