
export default function Link(props: { name: string; lien: string }) {
  return (
    <>
    <li >
      <a href={props.lien} className="hover:text-white transition duration-200">
        {props.name}
      </a>
    </li>
    </>
  );
}