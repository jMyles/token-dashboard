import { ComponentProps, FC } from "react"
import { BodySm, ListItem, Skeleton } from "@threshold-network/components"
import { InlineTokenBalance } from "../TokenBalance"

type TransactionDetailsItemProps = {
  label: string
  value?: string
}

export const TransactionDetailsItem: FC<TransactionDetailsItemProps> = ({
  label,
  value,
  children,
}) => {
  return (
    <ListItem display="flex" justifyContent="space-between" alignItems="center">
      <BodySm color="gray.500">{label}</BodySm>
      {value ? <BodySm color="gray.700">{value}</BodySm> : children}
    </ListItem>
  )
}

type TransactionDetailsAmountItemProps = Omit<
  ComponentProps<typeof InlineTokenBalance>,
  "tokenAmount"
> &
  Pick<TransactionDetailsItemProps, "label"> & { tokenAmount?: string }

export const TransactionDetailsAmountItem: FC<
  TransactionDetailsAmountItemProps
> = ({ label, tokenAmount, ...restProps }) => {
  return (
    <TransactionDetailsItem label={label}>
      <Skeleton isLoaded={!!tokenAmount}>
        <BodySm color="gray.700">
          <InlineTokenBalance
            withSymbol
            tokenAmount={tokenAmount || "0"}
            {...restProps}
          />
        </BodySm>
      </Skeleton>
    </TransactionDetailsItem>
  )
}
