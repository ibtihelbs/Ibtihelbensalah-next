import H1 from "./H1";
import H3 from "./H3";
const Services = () => {
  return (
    <section className="grid grid-cols-5   py-50 gap-4 ">
      <div>
        <div className="line-hr">
          <H3 content="services" />
        </div>
      </div>
      <div className="col-span-2 px-8">
        <H1 content="what do " noWrap={false} />
        <div className="text-end">
          <H1 content="I do ?" noWrap={false} />
        </div>
      </div>

      <ul className="grid gap-2 text-xl col-span-2">
        <li>Convert designs to interfaces</li>
        <hr />
        <li>Web redesign </li>
        <hr />

        <li>Implement web app</li>
        <hr />

        <li>Api integration</li>
      </ul>
    </section>
  );
};

export default Services;
