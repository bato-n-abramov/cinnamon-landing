"use client";
import { useState, useRef, useEffect } from "react";
import styles from "./CustomSelect.module.scss";

export default function CustomSelect({
    name,
    options = [],
    value = "",
    onChange,
    placeholder = "Select…",
    error,
}) {
    const [open, setOpen] = useState(false);
    const wrapRef = useRef(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleDown = (e) => {
            if (!wrapRef.current) return;
            const insideTrigger = wrapRef.current.contains(e.target);
            const insideMenu = menuRef.current?.contains(e.target);
            if (!insideTrigger && !insideMenu) setOpen(false);
        };
        window.addEventListener("mousedown", handleDown);
        return () => window.removeEventListener("mousedown", handleDown);
    }, []);

    const selected = options.find((o) => o.value === value);

    return (
        <div
            ref={wrapRef}
            className={`${styles.select} ${error ? styles.invalid : ""}`}
        >
            <button
                type="button"
                className={`${styles.trigger} ${selected ? styles.filled : ""}`}
                onMouseDown={(e) => { e.preventDefault(); setOpen((v) => !v); }}
                aria-haspopup="listbox"
                aria-expanded={open}
            >
                {selected ? selected.label : <span className={styles.placeholder}>{placeholder}</span>}
                <span className={`${styles.icon} ${open ? styles.open : ""}`}>
                    <svg
                        width="10"
                        height="6"
                        viewBox="0 0 10 6"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M5.24622 5.55683L9.53289 1.13683C9.80022 0.860163 9.63822 0.333496 9.28622 0.333496H0.712889C0.360889 0.333496 0.198888 0.860163 0.466222 1.13683L4.75289 5.55683C4.89489 5.7035 5.10422 5.7035 5.24622 5.55683Z"
                            fill="#162929"
                            fillOpacity={open ? "1" : "0.25"}
                        />
                    </svg>
                </span>
            </button>

            {open && (
                <ul
                    ref={menuRef}
                    role="listbox"
                    className={styles.menu}
                >
                    {options.map((opt) => (
                        <li
                            key={opt.value}
                            role="option"
                            aria-selected={opt.value === value}
                            className={`${styles.option} ${opt.value === value ? styles.active : ""}`}
                            onMouseDown={(e) => {
                                e.preventDefault();
                                onChange?.(opt.value);
                                setOpen(false);
                            }}
                        >
                            {opt.label}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}
