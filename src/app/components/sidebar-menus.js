"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  IconChevronDown,
  IconChevronUp,
  IconChartBar,
  IconAd,
  IconSettings,
  IconHelpCircle,
  IconChartPie,
  IconPalette,
  IconLogout,
} from "@tabler/icons-react";

export const CreatorStudio = () => {
  const [showMenu, setShowmenu] = useState(false);
  const toggleMenu = () => {
    setShowmenu(!showMenu);
  };

  return (
    <>
      {showMenu ? (
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Creator Studio</p>
            <IconChevronUp onClick={toggleMenu} color="blue" />
          </div>

          <div className="flex items-center space-x-2 pt-4">
            <figure className="w-6 h-5 relative">
              <Image
                src="/images/analytics.svg"
                fill
                style={{
                  objectFit: "cover",
                }}
                sizes="100vh"
                alt=""
              />
            </figure>
            <p className="text-lg">Analytics</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Creator Studio</p>
          <IconChevronDown onClick={toggleMenu} />
        </div>
      )}
    </>
  );
};

export const ProfessionalTools = () => {
  const [showMenu, setShowmenu] = useState(false);
  const toggleMenu = () => {
    setShowmenu(!showMenu);
  };
  return (
    <>
      {showMenu ? (
        <div>
          <div className="flex justify-between items-center">
            <p className="font-bold text-lg">Professional Tools</p>
            <IconChevronUp onClick={toggleMenu} color="blue" />
          </div>
          <div className="flex items-center space-x-2 pt-4">
            <IconAd />
            <p className="text-lg">Ads</p>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center">
          <p className="font-bold text-lg">Professional Tools</p>
          <IconChevronDown onClick={toggleMenu} />
        </div>
      )}
    </>
  );
};

export const Settings = () => {
  const [showMenu, setShowmenu] = useState(false);
  const toggleMenu = () => {
    setShowmenu(!showMenu);
  };
  return (
    <>
      {showMenu ? (
        <div>
          <div className="flex justify-between items-center pb-2">
            <p className="font-bold text-lg">Settings and Support</p>
            <IconChevronUp onClick={toggleMenu} color="blue" />
          </div>

          <div>
            <div className="flex items-center space-x-2 py-3">
              <IconSettings />
              <p className="text-lg">Settings and privacy</p>
            </div>

            <div className="flex items-center space-x-2 py-3">
              <IconHelpCircle />
              <p className="text-lg">Help center</p>
            </div>

            <div className="flex items-center space-x-2 py-3">
              <IconChartPie />
              <p className="text-lg">Data saver</p>
            </div>

            <div className="flex items-center space-x-2 py-3">
              <IconPalette />
              <p className="text-lg">Display</p>
            </div>

            <div className="flex items-center space-x-2 py-3">
              <IconLogout />
              <p className="text-lg">Logout</p>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex justify-between items-center pb-2">
          <p className="font-bold text-lg">Settings and Support</p>
          <IconChevronDown onClick={toggleMenu} />
        </div>
      )}
    </>
  );
};
