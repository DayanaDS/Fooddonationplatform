import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { toast } from "sonner@2.0.3";

interface DonateNowFormProps {
  onClose?: () => void;
}

export function DonateNowForm({ onClose }: DonateNowFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    donationType: "food",
    foodType: "",
    quantity: "",
    pickupAddress: "",
    preferredDate: "",
    notes: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! Your donation request has been submitted. We'll contact you shortly.");
    if (onClose) onClose();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your name"
            />
          </div>
          <div>
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your@email.com"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            type="tel"
            required
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            placeholder="+1 (555) 000-0000"
          />
        </div>

        <div>
          <Label>Donation Type *</Label>
          <RadioGroup
            value={formData.donationType}
            onValueChange={(value) => setFormData({ ...formData, donationType: value })}
            className="flex flex-wrap gap-4 mt-2"
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="food" id="food" />
              <Label htmlFor="food">Food Items</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="monetary" id="monetary" />
              <Label htmlFor="monetary">Monetary</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="volunteer" id="volunteer" />
              <Label htmlFor="volunteer">Volunteer Time</Label>
            </div>
          </RadioGroup>
        </div>

        {formData.donationType === "food" && (
          <>
            <div>
              <Label htmlFor="foodType">Food Type *</Label>
              <Select value={formData.foodType} onValueChange={(value) => setFormData({ ...formData, foodType: value })}>
                <SelectTrigger>
                  <SelectValue placeholder="Select food type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cooked">Cooked Food</SelectItem>
                  <SelectItem value="packaged">Packaged/Non-perishable</SelectItem>
                  <SelectItem value="fresh">Fresh Produce</SelectItem>
                  <SelectItem value="groceries">Grocery Items</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="quantity">Approximate Quantity *</Label>
              <Input
                id="quantity"
                required
                value={formData.quantity}
                onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                placeholder="e.g., 10 meals, 5kg rice, 20 cans"
              />
            </div>

            <div>
              <Label htmlFor="pickupAddress">Pickup Address *</Label>
              <Textarea
                id="pickupAddress"
                required
                value={formData.pickupAddress}
                onChange={(e) => setFormData({ ...formData, pickupAddress: e.target.value })}
                placeholder="Enter full address for pickup"
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="preferredDate">Preferred Pickup Date *</Label>
              <Input
                id="preferredDate"
                type="date"
                required
                value={formData.preferredDate}
                onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
              />
            </div>
          </>
        )}

        <div>
          <Label htmlFor="notes">Additional Notes</Label>
          <Textarea
            id="notes"
            value={formData.notes}
            onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
            placeholder="Any special instructions or information"
            rows={3}
          />
        </div>

        <div className="flex gap-4">
          <Button type="submit" className="flex-1 bg-green-600 hover:bg-green-700">
            Submit Donation
          </Button>
          {onClose && (
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
          )}
        </div>
      </form>
  );
}
