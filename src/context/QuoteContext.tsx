"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { QuoteCartItem, FlavorId } from "@/types";
import { WHOLESALE_PACKS } from "@/data/packs";
import { FLAVORS } from "@/data/flavors";

interface DetailedQuoteItem extends QuoteCartItem {
  packName: string;
  packSize: number;
  flavorName: string;
  totalCans: number;
  moq: number;
}

interface QuoteContextType {
  items: QuoteCartItem[];
  detailedItems: DetailedQuoteItem[];
  totalCartons: number;
  totalCans: number;
  isDrawerOpen: boolean;
  setIsDrawerOpen: (open: boolean) => void;
  addItem: (packId: "pack-6" | "pack-12" | "pack-24", flavorId: FlavorId | "mixed", cartons?: number) => void;
  updateQuantity: (packId: "pack-6" | "pack-12" | "pack-24", flavorId: FlavorId | "mixed", cartons: number) => void;
  removeItem: (packId: "pack-6" | "pack-12" | "pack-24", flavorId: FlavorId | "mixed") => void;
  clearCart: () => void;
  lastAddedKey: string | null;
}

const QuoteContext = createContext<QuoteContextType | undefined>(undefined);

export function QuoteProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<QuoteCartItem[]>([
    // Sensible B2B initial preset so the drawer and quote builder feel alive right away
    { packId: "pack-12", flavorId: "strawberry-lime", cartons: 8 },
    { packId: "pack-12", flavorId: "cranberry", cartons: 8 },
  ]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [lastAddedKey, setLastAddedKey] = useState<string | null>(null);

  const addItem = (
    packId: "pack-6" | "pack-12" | "pack-24",
    flavorId: FlavorId | "mixed",
    cartons: number = 1
  ) => {
    setItems((prev) => {
      const existingIndex = prev.findIndex(
        (i) => i.packId === packId && i.flavorId === flavorId
      );
      if (existingIndex > -1) {
        const updated = [...prev];
        updated[existingIndex].cartons += cartons;
        return updated;
      }
      return [...prev, { packId, flavorId, cartons }];
    });

    const key = `${packId}-${flavorId}-${Date.now()}`;
    setLastAddedKey(key);
    setIsDrawerOpen(true);
  };

  const updateQuantity = (
    packId: "pack-6" | "pack-12" | "pack-24",
    flavorId: FlavorId | "mixed",
    cartons: number
  ) => {
    if (cartons <= 0) {
      removeItem(packId, flavorId);
      return;
    }
    setItems((prev) =>
      prev.map((item) =>
        item.packId === packId && item.flavorId === flavorId
          ? { ...item, cartons }
          : item
      )
    );
  };

  const removeItem = (
    packId: "pack-6" | "pack-12" | "pack-24",
    flavorId: FlavorId | "mixed"
  ) => {
    setItems((prev) =>
      prev.filter((i) => !(i.packId === packId && i.flavorId === flavorId))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const detailedItems: DetailedQuoteItem[] = items.map((item) => {
    const pack = WHOLESALE_PACKS.find((p) => p.id === item.packId) || WHOLESALE_PACKS[0];
    const flavor =
      item.flavorId === "mixed"
        ? { name: "Variety Mix (50/50 Split)" }
        : FLAVORS.find((f) => f.id === item.flavorId) || FLAVORS[0];

    return {
      ...item,
      packName: pack.name,
      packSize: pack.size,
      flavorName: flavor.name,
      totalCans: item.cartons * pack.size,
      moq: pack.moq,
    };
  });

  const totalCartons = items.reduce((sum, item) => sum + item.cartons, 0);
  const totalCans = detailedItems.reduce((sum, item) => sum + item.totalCans, 0);

  return (
    <QuoteContext.Provider
      value={{
        items,
        detailedItems,
        totalCartons,
        totalCans,
        isDrawerOpen,
        setIsDrawerOpen,
        addItem,
        updateQuantity,
        removeItem,
        clearCart,
        lastAddedKey,
      }}
    >
      {children}
    </QuoteContext.Provider>
  );
}

export function useQuote() {
  const context = useContext(QuoteContext);
  if (!context) {
    throw new Error("useQuote must be used within a QuoteProvider");
  }
  return context;
}

