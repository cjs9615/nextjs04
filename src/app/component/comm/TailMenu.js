import Link from "next/link";
import TailLink from "./TailLink";

export default function TailMenu() {
    return (
        <div className="flex justify-between item-center border-b border-gray-200 p-4">
            <div>Next Js 실습</div>
            <nav>
                <TailLink href="/lec/clock" title='Clock'/>
                <TailLink href="/lec/lotto" title='Lotto'/>
                <TailLink href="/lec/boxoffices" title='박스오피스'/>
                <TailLink href="/" title='Home'/>
            </nav>
        </div>
    );
}
