import PageBanner from '../Components/PageBanner'
import bannerSingle from '../assets/banner-team.jpg'
import featureImage from '../assets/single-feature.jpg'

const listItems = [
  'Purus sequi accusamus? Nibh aut perspiciatis, lorem lorem perspiciatis.',
  'Dictum? Posuere cumque sed illum facilisis leo illum facilisis.',
  'Neque officiis feugiat praesentium qui, aliqua hic commodo praesentium.',
  'Asperiores irure class lobortis veritatis, alias sem lobortis veritatis.',
  'Ipsum eros quaerat deserunt proin porttitor, fugit ultrices.',
  'Volutpat, justo mollit ullamco sagittis duis enim labore, ullamcorper dicta',
] as const

const Singlepage = () => {
  return (
    <div>
      <PageBanner title="Single page" image={bannerSingle} />

      <section className="bg-white px-4 pt-10 pb-12 sm:px-8 sm:pt-12 md:pt-16 md:pb-20">
        <div className="mx-auto max-w-4xl">
          <figure className="mb-8">
            <img
              src={featureImage}
              alt="Life Positive Mission community gathering"
              className="w-full rounded-[25px] object-cover"
            />
          </figure>

          <div className="space-y-6 text-[#5f6c7b]">
            <h2 className="font-serif text-3xl font-bold text-[#1e2a4a] md:text-4xl">
              Let&apos;s build the better world together
            </h2>

            <p className="text-sm leading-relaxed md:text-base">
              Amet orci, nibh blanditiis tempor soluta bibendum, omnis dictumst
              eiusmod felis mollis porta molestiae, laborum fugiat, phasellus
              minim labore habitasse culpa dignissimos? Distinctio molestias!
              Incididunt pede nostra mollit quam quaerat voluptas similique
              accumsan quae accusantium aliqua illum faucibus amet voluptatum
              natoque sodales. Proident facilisis, atque impedit ullam
              recusandae ducimus quisquam faucibus dolorum nibh neque libero,
              laudantium harum labore facilis proident nec doloribus netus.
              Posuere accusamus nam repudiandae, tincidunt! Id doloribus tempus
              potenti adipiscing deleniti nemo! Vel, tortor eiusmod omnis
              molestie sint quisque mollitia molestiae et! Veniam mollitia
              adipisci, anim eligendi? Turpis laborum leo quisque eos! Suspen
              sectetuer proident ex nostrud, ratione.
            </p>

            <p className="text-sm leading-relaxed md:text-base">
              Amet orci, nibh blanditiis tempor soluta bibendum, omnis dictumst
              eiusmod felis mollis porta molestiae, laborum fugiat, phasellus
              minim labore habitasse culpa dignissimos? Distinctio molestias!
              Incididunt pede nostra mollit quam quaerat voluptas similique
              accumsan quae accusantium aliqua illum faucibus amet voluptatum
              natoque sodales. Laboris justo dolorem deserunt consectetur
              ultricies tortor cum tenetur ducimus occaecati imperdiet enim mus
              ab arcu. Taciti euismod metpus!
            </p>

            <ul className="list-disc space-y-2 pl-5 text-sm md:text-base">
              {listItems.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-sm leading-relaxed md:text-base">
              Sequi sociis leo, interdum eos ipsa pharetra, unde fringilla erat
              vulputate litora nisl adipisicing primis consectetuer erat aliqua
              reprehenderit unde accusamus earum sollicitudin voluptatum wisi
              vulputate deleniti, accusamus, animi rutrum. Labore et! Odit, nunc
              nostra, excepturi dui netus, euismod pariatur? Proin vivamus
              diamlorem natoque reprehenderit vivamus diamlorem natpo.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Singlepage
