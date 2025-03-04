import toast from "react-hot-toast";

export enum TradeStage {
  REQUESTED = "REQUESTED",
  FUNDS_IN_ESCROW = "FUNDS_IN_ESCROW",
  SECOND_PARTY_CONFIRMED = "SECOND_PARTY_CONFIRMED",
  TAKER_FUNDS_TRANSFERRED = "TAKER_FUNDS_TRANSFERRED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED"
}

/**
 * Get the display message for a trade stage
 */
function getTradeStageMessage(stage: TradeStage, isMaker: boolean): string {
  switch (stage) {
    case TradeStage.REQUESTED:
      return "Trade request submitted";
    case TradeStage.FUNDS_IN_ESCROW:
      return `Funds transferred from ${isMaker ? 'your' : 'maker\'s'} wallet to escrow`;
    case TradeStage.SECOND_PARTY_CONFIRMED:
      return "Second party confirmed the trade";
    case TradeStage.TAKER_FUNDS_TRANSFERRED:
      return `Funds transferred from ${isMaker ? 'taker\'s' : 'your'} wallet to escrow`;
    case TradeStage.COMPLETED:
      return "Trade completed successfully";
    case TradeStage.CANCELLED:
      return "Trade cancelled";
    default:
      return "Trade status updated";
  }
}

/**
 * Show a toast notification for a trade stage
 */
export function showTradeNotification(stage: TradeStage, isMaker: boolean = true) {
  const duration = 5000;
  
  // Get the message based on stage and perspective
  const message = getTradeStageMessage(stage, isMaker);

  // Use appropriate icons for each stage
  let icon = '✅';
  if (stage === TradeStage.CANCELLED) {
    icon = '❌';
    toast.error(message, { duration, icon });
    return;
  } else if (stage === TradeStage.COMPLETED) {
    icon = '🎉';
  } else if (stage === TradeStage.FUNDS_IN_ESCROW || stage === TradeStage.TAKER_FUNDS_TRANSFERRED) {
    icon = '💰';
  } else if (stage === TradeStage.REQUESTED) {
    icon = '🔄';
  }
  
  toast.success(message, { duration, icon });
}