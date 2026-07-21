import {useCountUp} from "../../utils/use-count-up.ts";

interface CounterItemProps {
    title: string;
    content: string;
    active: boolean;
}

const CounterItem = ({title, content, active}: CounterItemProps) => {
    const match = title.match(/^(\d+)(.*)$/);
    const target = match ? parseInt(match[1], 10) : 0;
    const suffix = match ? match[2] : '';
    const value = useCountUp(target, {active});

    return (
        <span className="border-t border-line">
            <p className="text-accent text-2xl md:text-4xl font-heading font-bold mt-4">{value}{suffix}</p>
            <p className="break-all text-sm md:text-xl">{content}</p>
        </span>
    );
}
export default CounterItem;
