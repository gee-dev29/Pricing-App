import React from "react";
import { evaluatePasswordStrength } from "../utils/PasswordStrength";
import PasswordStrengthConfig from "../utils/PasswordStrengthConfig";

export default function PasswordStrengthMeter({ password = "" }) {
    const score = evaluatePasswordStrength(password);

    const strength =
        PasswordStrengthConfig[Math.max(score - 1, 0)] ??
        PasswordStrengthConfig[0];

    return (
        <div className="mt-1">
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, index) => (
                    <div
                        key={index}
                        className={`h-0.5 w-full rounded transition-all duration-300 ${
                            index < score ? strength.color : "bg-slate-700"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
